// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import formatDistance from '.'

describe('en-US locale > formatDistance', function () {
  describe('lessThanXSeconds', function () {
    context('जब गिनती 1 के बराबर होती है', function () {
      it('एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('एक सेकंड से कम', 1) === 'एक सेकंड से कम')
      })
    })

    context('जब गिनती 1 से अधिक है', function () {
      it('एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('lessThanXSeconds', 2) === 'कम से कम 2 सेकंड')
      })
    })
  })

  describe('xSeconds', function () {
    context('जब गिनती 1 के बराबर होती है', function () {
      it('एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('xSeconds', 1) === '1 सेकेंड')
      })
    })

    context('जब गिनती 1 से अधिक है', function () {
      it('एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('xSeconds', 2) === '2 सेकेंड')
      })
    })
  })

  describe('halfAMinute', function () {
    it('एक उचित स्ट्रिंग देता है', function () {
      assert(formatDistance('halfAMinute') === 'आधा मिनट')
    })

    it('दूसरे तर्क को अनदेखा करता है', function () {
      assert(formatDistance('halfAMinute', 123) === 'आधा मिनट')
    })
  })

  describe('lessThanXMinutes', function () {
    context('जब गिनती 1 के बराबर होती है', function () {
      it('एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('lessThanXMinutes', 1) === 'एक मिनट से कम')
      })
    })

    context('जब गिनती 1 से अधिक है', function () {
      it(' एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('lessThanXMinutes', 2) === '2 मिनट से कम')
      })
    })
  })

  describe('xMinutes', function () {
    context('जब गिनती 1 के बराबर होती है', function () {
      it('एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('xMinutes', 1) === '1 मिनट')
      })
    })

    context('जब गिनती 1 से अधिक है', function () {
      it('एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('xMinutes', 2) === '2 मिनट')
      })
    })
  })

  describe('aboutXHours', function () {
    context('जब गिनती 1 के बराबर होती है', function () {
      it(' एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('aboutXHours', 1) === 'लगभग 1 घंटे')
      })
    })

    context('जब गिनती 1 से अधिक है', function () {
      it(' एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('aboutXHours', 2) === 'लगभग 2 घंटे')
      })
    })
  })

  describe('xHours', function () {
    context('जब गिनती 1 के बराबर होती है', function () {
      it(' एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('xHours', 1) === '1 घंटा')
      })
    })

    context('जब गिनती 1 से अधिक है', function () {
      it(' एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('xHours', 2) === '2 घंटे')
      })
    })
  })

  describe('xDays', function () {
    context('जब गिनती 1 के बराबर होती है', function () {
      it(' एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('xDays', 1) === 'एक दिन')
      })
    })

    context('जब गिनती 1 से अधिक है', function () {
      it(' एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('xDays', 2) === '2 दिन')
      })
    })
  })

  describe('aboutXMonths', function () {
    context('जब गिनती 1 के बराबर होती है', function () {
      it(' एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('aboutXMonths', 1) === 'लगभग 1 महीने')
      })
    })

    context('जब गिनती 1 से अधिक है', function () {
      it(' एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('aboutXMonths', 2) === 'लगभग 2 महीनेs')
      })
    })
  })

  describe('xMonths', function () {
    context('जब गिनती 1 के बराबर होती है', function () {
      it(' एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('xMonths', 1) === ' 1 महीना')
      })
    })

    context('जब गिनती 1 से अधिक है', function () {
      it(' एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('xMonths', 2) === '2 महीने')
      })
    })
  })

  describe('aboutXYears', function () {
    context('जब गिनती 1 के बराबर होती है', function () {
      it(' एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('aboutXYears', 1) === 'लगभग 1 वर्ष')
      })
    })

    context('जब गिनती 1 से अधिक है', function () {
      it(' एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('aboutXYears', 2) === ' लगभग 2 साल')
      })
    })
  })

  describe('xYears', function () {
    context('जब गिनती 1 के बराबर होती है', function () {
      it(' एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('xYears', 1) === ' 1 साल')
      })
    })

    context('जब गिनती 1 से अधिक है', function () {
      it(' एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('xYears', 2) === '2 साल')
      })
    })
  })

  describe('overXYears', function () {
    context('जब गिनती 1 के बराबर होती है', function () {
      it(' एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('overXYears', 1) === '1 वर्ष से अधिक')
      })
    })

    context('जब गिनती 1 से अधिक है', function () {
      it(' एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('overXYears', 2) === '2 वर्ष से अधिक')
      })
    })
  })

  describe('almostXYears', function () {
    context('जब गिनती 1 के बराबर होती है', function () {
      it(' एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('almostXYears', 1) === 'लगभग 1 वर्ष')
      })
    })

    context('जब गिनती 1 से अधिक है', function () {
      it(' एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('almostXYears', 2) === 'लगभग 2 वर्ष')
      })
    })
  })

  context(' पिछले प्रत्यय के साथ', function () {
    it('adds `ago` to a string', function () {
      var result = formatDistance('aboutXYears', 1, {
        addSuffix: true,
        comparison: -1
      })
      assert(result === 'लगभग 1 वर्ष पूर्व')
    })
  })

  context('with a future suffix', function () {
    it('adds `in` to a string', function () {
      var result = formatDistance('halfAMinute', null, {
        addSuffix: true,
        comparison: 1
      })
      assert(result === 'आधा मिनट में')
    })
  })
})
// @flow
/* eslint-env mocha */

describe('en-US locale > formatDistance', function () {
  describe('lessThanXSeconds', function () {
    context('जब गिनती 1 के बराबर होती है', function () {
      it(' एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('lessThanXSeconds', 1) === 'एक सेकंड से कम')
      })
    })

    context('जब गिनती 1 से अधिक है', function () {
      it(' एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('lessThanXSeconds', 2) === ' 2 सेकंड से कम')
      })
    })
  })

  describe('xSeconds', function () {
    context('जब गिनती 1 के बराबर होती है', function () {
      it(' एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('xSeconds', 1) === '1 सेकेंड')
      })
    })

    context('जब गिनती 1 से अधिक है', function () {
      it(' एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('xSeconds', 2) === ' 2 सेकेंड')
      })
    })
  })

  describe('halfAMinute', function () {
    it(' एक उचित स्ट्रिंग देता है', function () {
      assert(formatDistance('halfAMinute') === 'आधा मिनट')
    })

    it('ignores the second argument', function () {
      assert(formatDistance('halfAMinute', 123) === 'आधा मिनट')
    })
  })

  describe('lessThanXMinutes', function () {
    context('जब गिनती 1 के बराबर होती है', function () {
      it(' एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('lessThanXMinutes', 1) === 'एक मिनट से कम')
      })
    })

    context('जब गिनती 1 से अधिक है', function () {
      it(' एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('lessThanXMinutes', 2) === '2 मिनट से कम')
      })
    })
  })

  describe('xMinutes', function () {
    context('जब गिनती 1 के बराबर होती है', function () {
      it(' एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('xMinutes', 1) === '1 मिनट')
      })
    })

    context('जब गिनती 1 से अधिक है', function () {
      it(' एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('xMinutes', 2) === 'दो मिनट')
      })
    })
  })

  describe('aboutXHours', function () {
    context('जब गिनती 1 के बराबर होती है', function () {
      it(' एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('aboutXHours', 1) === 'लगभग 1 घंटे')
      })
    })

    context('जब गिनती 1 से अधिक है', function () {
      it(' एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('aboutXHours', 2) === 'लगभग दो घंटे')
      })
    })
  })

  describe('xHours', function () {
    context('जब गिनती 1 के बराबर होती है', function () {
      it(' एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('xHours', 1) === '1 घंटा')
      })
    })

    context('जब गिनती 1 से अधिक है', function () {
      it(' एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('xHours', 2) === '2 घंटे')
      })
    })
  })

  describe('xDays', function () {
    context('जब गिनती 1 के बराबर होती है', function () {
      it(' एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('xDays', 1) === ' एक दिन')
      })
    })

    context('जब गिनती 1 से अधिक है', function () {
      it(' एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('xDays', 2) === '2 दिन')
      })
    })
  })

  describe('aboutXMonths', function () {
    context('जब गिनती 1 के बराबर होती है', function () {
      it(' एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('aboutXMonths', 1) === 'लगभग 1 महीने')
      })
    })

    context('जब गिनती 1 से अधिक है', function () {
      it(' एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('aboutXMonths', 2) === 'लगभग 2 महीनेs')
      })
    })
  })

  describe('xMonths', function () {
    context('जब गिनती 1 के बराबर होती है', function () {
      it(' एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('xMonths', 1) === ' 1 महीना')
      })
    })

    context('जब गिनती 1 से अधिक है', function () {
      it(' एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('xMonths', 2) === '2 महीने')
      })
    })
  })

  describe('aboutXYears', function () {
    context('जब गिनती 1 के बराबर होती है', function () {
      it(' एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('aboutXYears', 1) === 'लगभग 1 वर्ष')
      })
    })

    context('जब गिनती 1 से अधिक है', function () {
      it(' एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('aboutXYears', 2) === ' लगभग 2 साल')
      })
    })
  })

  describe('xYears', function () {
    context('जब गिनती 1 के बराबर होती है', function () {
      it(' एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('xYears', 1) === ' 1 साल')
      })
    })

    context('जब गिनती 1 से अधिक है', function () {
      it(' एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('xYears', 2) === '2 years')
      })
    })
  })

  describe('overXYears', function () {
    context('जब गिनती 1 के बराबर होती है', function () {
      it(' एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('overXYears', 1) === 'over  1 साल')
      })
    })

    context('जब गिनती 1 से अधिक है', function () {
      it(' एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('overXYears', 2) === 'over 2 years')
      })
    })
  })

  describe('almostXYears', function () {
    context('जब गिनती 1 के बराबर होती है', function () {
      it(' एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('almostXYears', 1) === 'लगभग 1 वर्ष')
      })
    })

    context('जब गिनती 1 से अधिक है', function () {
      it(' एक उचित स्ट्रिंग देता है', function () {
        assert(formatDistance('almostXYears', 2) === 'लगभग 2 वर्ष')
      })
    })
  })

  context(' पिछले प्रत्यय के साथ', function () {
    it('adds `ago` to a string', function () {
      var result = formatDistance('aboutXYears', 1, {
        addSuffix: true,
        comparison: -1
      })
      assert(result === 'लगभग 1 वर्ष पूर्व')
    })
  })

  context('with a future suffix', function () {
    it('adds `in` to a string', function () {
      var result = formatDistance('halfAMinute', null, {
        addSuffix: true,
        comparison: 1
      })
      assert(result === 'आधा मिनट में')
    })
  })
})
