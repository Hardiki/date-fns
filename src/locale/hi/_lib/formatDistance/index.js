var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'एक सेकंड से कम',
    other: '{{count}} सेकंड से कम'
  },

  xSeconds: {
    one: '1 सेकेंड',
    other: '{{count}} सेकेंड'
  },

  halfAMinute: 'आधा मिनट',

  lessThanXMinutes: {
    one: 'एक मिनट से कम',
    other: '{{count}} मिनट से कम'
  },

  xMinutes: {
    one: '1 मिनट',
    other: '{{count}} मिनट'
  },

  aboutXHours: {
    one: 'लगभग 1 घंटे',
    other: '{{count}} घंटे के बारे में'
  },

  xHours: {
    one: '1 घंटा',
    other: '{{count}} घंटे'
  },

  xDays: {
    one: 'एक दिन',
    other: '{{count}} दिन'
  },

  aboutXMonths: {
    one: 'लगभग 1 महीने',
    other: '{{count}} महीने के बारे में'
  },

  xMonths: {
    one: '1 महीना',
    other: '{{count}} महीने'
  },

  aboutXYears: {
    one: 'लगभग 1 वर्ष',
    other: '{{count}} साल के बारे में'
  },

  xYears: {
    one: '1 साल',
    other: '{{count}} वर्षों'
  },

  overXYears: {
    one: '1 वर्ष से अधिक',
    other: '{{count}} वर्षों से अधिक'
  },

  almostXYears: {
    one: 'लगभग 1 वर्ष',
    other: 'लगभग {{count}} साल'
  }
}

export default function formatDistance (token, count, options) {
  options = options || {}

  var result
  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token]
  } else if (count === 1) {
    result = formatDistanceLocale[token].one
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count)
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'में ' + result
    } else {
      return result + ' पूर्व'
    }
  }

  return result
}
