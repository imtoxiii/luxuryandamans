// Location data for pricing calculator
export interface Country {
  code: string;
  name: string;
  states?: State[];
}

export interface State {
  code: string;
  name: string;
}

export const countries: Country[] = [
  {
    code: 'IN',
    name: 'India',
    states: [
      { code: 'WB', name: 'West Bengal' },
      { code: 'DL', name: 'Delhi' },
      { code: 'MH', name: 'Maharashtra' },
      { code: 'KA', name: 'Karnataka' },
      { code: 'TN', name: 'Tamil Nadu' },
      { code: 'AP', name: 'Andhra Pradesh' },
      { code: 'TS', name: 'Telangana' },
      { code: 'KL', name: 'Kerala' },
      { code: 'GJ', name: 'Gujarat' },
      { code: 'RJ', name: 'Rajasthan' },
      { code: 'UP', name: 'Uttar Pradesh' },
      { code: 'MP', name: 'Madhya Pradesh' },
      { code: 'BR', name: 'Bihar' },
      { code: 'OR', name: 'Odisha' },
      { code: 'JH', name: 'Jharkhand' },
      { code: 'AS', name: 'Assam' },
      { code: 'PB', name: 'Punjab' },
      { code: 'HR', name: 'Haryana' },
      { code: 'HP', name: 'Himachal Pradesh' },
      { code: 'UK', name: 'Uttarakhand' },
      { code: 'GA', name: 'Goa' },
      { code: 'AN', name: 'Andaman & Nicobar Islands' },
    ]
  },
  {
    code: 'US',
    name: 'United States',
    states: [
      { code: 'NY', name: 'New York' },
      { code: 'CA', name: 'California' },
      { code: 'FL', name: 'Florida' },
      { code: 'TX', name: 'Texas' },
      { code: 'IL', name: 'Illinois' },
    ]
  },
  {
    code: 'GB',
    name: 'United Kingdom',
    states: [
      { code: 'ENG', name: 'England' },
      { code: 'SCT', name: 'Scotland' },
      { code: 'WLS', name: 'Wales' },
      { code: 'NIR', name: 'Northern Ireland' },
    ]
  },
  {
    code: 'AU',
    name: 'Australia',
    states: [
      { code: 'NSW', name: 'New South Wales' },
      { code: 'VIC', name: 'Victoria' },
      { code: 'QLD', name: 'Queensland' },
      { code: 'WA', name: 'Western Australia' },
      { code: 'SA', name: 'South Australia' },
      { code: 'TAS', name: 'Tasmania' },
    ]
  },
  {
    code: 'CA',
    name: 'Canada',
    states: [
      { code: 'ON', name: 'Ontario' },
      { code: 'QC', name: 'Quebec' },
      { code: 'BC', name: 'British Columbia' },
      { code: 'AB', name: 'Alberta' },
      { code: 'MB', name: 'Manitoba' },
      { code: 'SK', name: 'Saskatchewan' },
    ]
  },
  {
    code: 'SG',
    name: 'Singapore'
  },
  {
    code: 'AE',
    name: 'United Arab Emirates'
  },
  {
    code: 'MY',
    name: 'Malaysia'
  },
  {
    code: 'TH',
    name: 'Thailand'
  },
  {
    code: 'JP',
    name: 'Japan'
  },
  {
    code: 'KR',
    name: 'South Korea'
  },
  {
    code: 'DE',
    name: 'Germany'
  },
  {
    code: 'FR',
    name: 'France'
  },
  {
    code: 'IT',
    name: 'Italy'
  },
  {
    code: 'ES',
    name: 'Spain'
  },
  {
    code: 'NL',
    name: 'Netherlands'
  },
  {
    code: 'SE',
    name: 'Sweden'
  },
  {
    code: 'NO',
    name: 'Norway'
  },
  {
    code: 'DK',
    name: 'Denmark'
  },
];

export const findCountryByCode = (code: string): Country | undefined => {
  return countries.find(country => country.code === code);
};

export const findStateByCode = (countryCode: string, stateCode: string): State | undefined => {
  const country = findCountryByCode(countryCode);
  return country?.states?.find(state => state.code === stateCode);
}; 