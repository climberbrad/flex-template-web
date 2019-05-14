/*
 * Marketplace specific configuration.
 */

export const amenities = [
  {
    key: '1_hr',
    label: 'One Hour',
  },
  {
    key: '2_hr',
    label: 'Two Hours',
  },
  {
    key: '3_hr',
    label: 'Three Hours',
  },
  {
    key: '4_hr',
    label: 'Four Hours',
  },
  {
    key: 'half_day',
    label: 'Half Day',
  },
  {
    key: 'full_day',
    label: 'Full Day',
  },
];

export const categories = [
  { key: 'skiing', label: 'Skiing' },
  { key: 'snowboarding', label: 'Snowboarding' },
  { key: 'hiking', label: 'Hiking' },
  { key: 'climbing', label: 'Climbing' },
  { key: 'biking', label: 'Biking' },
  { key: 'surfing', label: 'Surfing' },
  { key: 'trek', label: 'Trekking' },
  { key: 'other', label: 'Other' },
];

// Price filter configuration
// Note: unlike most prices this is not handled in subunits
export const priceFilterConfig = {
  min: 0,
  max: 1000,
  step: 5,
};

// Activate booking dates filter on search page
export const dateRangeFilterConfig = {
  active: true,
};

export const difficulty = [
  { key: 'novice', label : 'Novice'},
  { key: 'beginner', label : 'Beginner'},
  { key: 'moderate', label : 'Moderate'},
  { key: 'advanced', label : 'Advanced'},
];
