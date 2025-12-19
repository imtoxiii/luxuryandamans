/**
 * Image Focus/Position Utility
 * 
 * Smart image positioning system that analyzes image filenames
 * to determine the best object-position for cropping.
 * 
 * Naming Conventions:
 * - _top or _t: Focus on top of image (e.g., hero_top.jpg)
 * - _bottom or _b: Focus on bottom of image
 * - _left or _l: Focus on left of image
 * - _right or _r: Focus on right of image
 * - _center or _c: Focus on center (default)
 * - _tl: Top-left focus
 * - _tr: Top-right focus
 * - _bl: Bottom-left focus
 * - _br: Bottom-right focus
 * - _portrait or _p: Image is portrait, will use special handling
 * - _landscape or _ls: Image is landscape (default behavior)
 * 
 * Examples:
 * - hero_top.jpg -> focuses on top portion
 * - card_center.jpg -> focuses on center
 * - beach_tl.jpg -> focuses on top-left
 * - sunset_portrait.jpg -> handles as portrait image
 */

export type FocusPosition =
    | 'center'
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right';

export type ImageOrientation = 'portrait' | 'landscape' | 'square' | 'unknown';

export interface ImageFocusInfo {
    position: FocusPosition;
    cssPosition: string;
    orientation: ImageOrientation;
    isPortrait: boolean;
}

// Map of filename patterns to focus positions
const focusPatterns: [RegExp, FocusPosition][] = [
    [/_tl\./i, 'top-left'],
    [/_tr\./i, 'top-right'],
    [/_bl\./i, 'bottom-left'],
    [/_br\./i, 'bottom-right'],
    [/_top\./i, 'top'],
    [/_t\./i, 'top'],
    [/_bottom\./i, 'bottom'],
    [/_b\./i, 'bottom'],
    [/_left\./i, 'left'],
    [/_l\./i, 'left'],
    [/_right\./i, 'right'],
    [/_r\./i, 'right'],
    [/_center\./i, 'center'],
    [/_c\./i, 'center'],
];

// Portrait/landscape detection patterns
const orientationPatterns: [RegExp, ImageOrientation][] = [
    [/_portrait\./i, 'portrait'],
    [/_p\./i, 'portrait'],
    [/_landscape\./i, 'landscape'],
    [/_ls\./i, 'landscape'],
    [/_square\./i, 'square'],
    [/_sq\./i, 'square'],
];

/**
 * Convert focus position to CSS object-position value
 */
const positionToCSS: Record<FocusPosition, string> = {
    'center': 'center center',
    'top': 'center top',
    'bottom': 'center bottom',
    'left': 'left center',
    'right': 'right center',
    'top-left': 'left top',
    'top-right': 'right top',
    'bottom-left': 'left bottom',
    'bottom-right': 'right bottom',
};

/**
 * Special CSS positioning for portrait images in landscape containers
 * These values are optimized to show the best part of portrait images
 */
const portraitPositionToCSS: Record<FocusPosition, string> = {
    'center': 'center 25%', // Show upper-center (faces are usually here)
    'top': 'center 10%',
    'bottom': 'center 75%',
    'left': 'left 25%',
    'right': 'right 25%',
    'top-left': '20% 10%',
    'top-right': '80% 10%',
    'bottom-left': '20% 75%',
    'bottom-right': '80% 75%',
};

/**
 * Extract the filename from a path or URL
 */
const getFilename = (imagePath: string): string => {
    if (!imagePath) return '';

    // Handle URLs with query strings
    const pathWithoutQuery = imagePath.split('?')[0];

    // Get the last segment of the path
    const segments = pathWithoutQuery.split(/[/\\]/);
    return segments[segments.length - 1] || '';
};

/**
 * Parse focus position from filename
 */
const parseFocusPosition = (filename: string): FocusPosition => {
    for (const [pattern, position] of focusPatterns) {
        if (pattern.test(filename)) {
            return position;
        }
    }
    return 'center'; // Default
};

/**
 * Parse image orientation from filename
 */
const parseOrientation = (filename: string): ImageOrientation => {
    for (const [pattern, orientation] of orientationPatterns) {
        if (pattern.test(filename)) {
            return orientation;
        }
    }
    return 'unknown';
};

/**
 * Get image focus information from filename
 * Main function to use for determining how to position an image
 */
export const getImageFocusInfo = (imagePath: string): ImageFocusInfo => {
    const filename = getFilename(imagePath);
    const position = parseFocusPosition(filename);
    const orientation = parseOrientation(filename);
    const isPortrait = orientation === 'portrait';

    // Use portrait-optimized positioning if image is marked as portrait
    const cssPosition = isPortrait
        ? portraitPositionToCSS[position]
        : positionToCSS[position];

    return {
        position,
        cssPosition,
        orientation,
        isPortrait,
    };
};

/**
 * Get just the CSS object-position value for an image
 * Simplified function for direct use in style props
 */
export const getImagePosition = (imagePath: string): string => {
    return getImageFocusInfo(imagePath).cssPosition;
};

/**
 * Detect image orientation from actual image dimensions
 * Use this when you have access to the image element or dimensions
 */
export const detectOrientationFromDimensions = (
    width: number,
    height: number
): ImageOrientation => {
    const ratio = width / height;
    if (ratio > 1.2) return 'landscape';
    if (ratio < 0.8) return 'portrait';
    return 'square';
};

/**
 * Get optimal object-position based on actual image dimensions
 * This function can be used when image loads to dynamically adjust position
 */
export const getOptimalPosition = (
    imagePath: string,
    actualWidth?: number,
    actualHeight?: number
): string => {
    const focusInfo = getImageFocusInfo(imagePath);

    // If we have actual dimensions and orientation is unknown from filename,
    // use dimension-based detection
    if (actualWidth && actualHeight && focusInfo.orientation === 'unknown') {
        const detectedOrientation = detectOrientationFromDimensions(actualWidth, actualHeight);

        if (detectedOrientation === 'portrait') {
            // Use portrait positioning
            return portraitPositionToCSS[focusInfo.position];
        }
    }

    return focusInfo.cssPosition;
};

/**
 * CSS class generator for Tailwind-like object-position
 * Returns appropriate Tailwind CSS class for object-position
 */
export const getObjectPositionClass = (imagePath: string): string => {
    const { position, isPortrait } = getImageFocusInfo(imagePath);

    if (isPortrait) {
        // Custom percentage-based positioning for portrait images
        // These will need to be applied as inline styles
        return 'object-[center_25%]';
    }

    const classMap: Record<FocusPosition, string> = {
        'center': 'object-center',
        'top': 'object-top',
        'bottom': 'object-bottom',
        'left': 'object-left',
        'right': 'object-right',
        'top-left': 'object-left-top',
        'top-right': 'object-right-top',
        'bottom-left': 'object-left-bottom',
        'bottom-right': 'object-right-bottom',
    };

    return classMap[position] || 'object-center';
};

/**
 * Smart Image Component Props Generator
 * Returns style props ready to be spread on an img element
 */
export const getSmartImageStyles = (
    imagePath: string,
    containerType: 'card' | 'hero' | 'gallery' = 'card'
): React.CSSProperties => {
    const { cssPosition, isPortrait } = getImageFocusInfo(imagePath);

    const baseStyles: React.CSSProperties = {
        objectFit: 'cover',
        objectPosition: cssPosition,
        width: '100%',
        height: '100%',
    };

    // Apply different scaling for portrait images in card/hero containers
    if (isPortrait && (containerType === 'card' || containerType === 'hero')) {
        return {
            ...baseStyles,
            // Scale up portrait images slightly to reduce letterboxing feel
            transform: 'scale(1.1)',
        };
    }

    return baseStyles;
};

export default {
    getImageFocusInfo,
    getImagePosition,
    getOptimalPosition,
    getObjectPositionClass,
    getSmartImageStyles,
    detectOrientationFromDimensions,
};
