# Hotel Folder Creator Script
# PowerShell script to quickly create hotel folders

# Configuration
$packageSlug = "honeymoon-5n6d"  # Change this to your package
$basePath = "public\images\packages\$packageSlug\hotels"

# Define your hotels by category
$hotels = @{
    "3-star" = @(
        "Dolphin Resort Havelock",
        "Wild Orchid Beach Resort",
        "Coral Reef Resort"
    )
    "4-star" = @(
        "Symphony Palms Beach Resort",
        "Sea Shell Resort Havelock",
        "Silver Sand Beach Resort",
        "TSG Blue Resort",
        "SeaShell Neil"
    )
    "5-star" = @(
        "Taj Exotica Resort & Spa",
        "Barefoot at Havelock",
        "Munjoh Ocean Resort",
        "Sterling Resort"
    )
    "standard" = @(
        "Bay Island Resort",
        "Peerless Resort"
    )
    "deluxe" = @(
        "Haywizz Havelock",
        "Blue Bird Resort"
    )
    "luxury" = @(
        "Jalakara Boutique Hotel"
    )
}

# Room types to create subfolders for
$roomTypes = @(
    "standard-room",
    "deluxe-room",
    "super-deluxe",
    "suite"
)

# Function to slugify hotel name
function Get-Slug {
    param([string]$text)
    $text = $text.ToLower()
    $text = $text -replace '[^a-z0-9\s-]', ''
    $text = $text -replace '\s+', '-'
    $text = $text -replace '-+', '-'
    $text = $text.Trim('-')
    return $text
}

# Create folders
Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  Creating Hotel Folder Structure" -ForegroundColor Green
Write-Host "========================================`n" -ForegroundColor Cyan

$totalCreated = 0

foreach ($category in $hotels.Keys) {
    Write-Host "Category: $category" -ForegroundColor Yellow
    
    foreach ($hotelName in $hotels[$category]) {
        $hotelSlug = Get-Slug $hotelName
        $hotelPath = "$basePath\$category\$hotelSlug"
        
        # Create main hotel folder
        if (-not (Test-Path $hotelPath)) {
            New-Item -ItemType Directory -Force -Path $hotelPath | Out-Null
            Write-Host "  ✓ Created: $category\$hotelSlug" -ForegroundColor Green
            $totalCreated++
        } else {
            Write-Host "  - Exists: $category\$hotelSlug" -ForegroundColor Gray
        }
        
        # Create room type subfolders
        foreach ($roomType in $roomTypes) {
            $roomPath = "$hotelPath\$roomType"
            if (-not (Test-Path $roomPath)) {
                New-Item -ItemType Directory -Force -Path $roomPath | Out-Null
            }
        }
        
        # Create a README in the hotel folder
        $readmePath = "$hotelPath\README.txt"
        if (-not (Test-Path $readmePath)) {
            $readmeContent = @"
Hotel: $hotelName
Category: $category
Folder: $hotelSlug

IMAGE INSTRUCTIONS:
1. Add main hotel images here with names: 1.jpg, 2.jpg, 3.jpg, etc.
2. First image (1.jpg) will be used as the thumbnail
3. Add room-specific images in subfolders:
   - standard-room/ (for standard room images)
   - deluxe-room/ (for deluxe room images)
   - super-deluxe/ (for super deluxe images)
   - suite/ (for suite images)

USAGE IN CODE:
<HotelGallery
  packageSlug="$packageSlug"
  category="$category"
  hotelName="$hotelName"
/>

For room type:
<HotelGallery
  packageSlug="$packageSlug"
  category="$category"
  hotelName="$hotelName"
  roomType="Standard Room"
/>
"@
            $readmeContent | Out-File -FilePath $readmePath -Encoding UTF8
        }
    }
    
    Write-Host ""
}

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  ✓ Created $totalCreated new hotel folders" -ForegroundColor Green
Write-Host "  ✓ All folders include room type subfolders" -ForegroundColor Green
Write-Host "  ✓ README files added to each hotel" -ForegroundColor Green
Write-Host "========================================`n" -ForegroundColor Cyan

Write-Host "Next Steps:" -ForegroundColor Yellow
Write-Host "1. Navigate to: $basePath\[category]\[hotel-slug]\" -ForegroundColor Cyan
Write-Host "2. Add your images: 1.jpg, 2.jpg, 3.jpg, etc." -ForegroundColor Cyan
Write-Host "3. Optionally add room images in subfolders" -ForegroundColor Cyan
Write-Host "4. Use the HotelGallery component in your code" -ForegroundColor Cyan
Write-Host "5. Images will automatically appear!`n" -ForegroundColor Cyan

# Optional: List all created folders
Write-Host "Want to see the folder structure? (Y/N): " -NoNewline -ForegroundColor Yellow
$response = Read-Host
if ($response -eq 'Y' -or $response -eq 'y') {
    Write-Host "`nFolder Structure:" -ForegroundColor Yellow
    Get-ChildItem -Path $basePath -Recurse -Directory | 
        ForEach-Object { 
            $relativePath = $_.FullName.Replace("$PWD\$basePath\", "")
            $depth = ($relativePath.Split('\').Count - 1)
            $indent = "  " * $depth
            Write-Host "$indent└─ $($_.Name)" -ForegroundColor Cyan
        }
}
