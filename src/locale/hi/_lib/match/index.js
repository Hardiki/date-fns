import buildMatchFn from '../../../_lib/buildMatchFn/index.js'
import buildParseFn from '../../../_lib/buildParseFn/index.js'
import buildMatchPatternFn from '../../../_lib/buildMatchPatternFn/index.js'
import parseDecimal from '../../../_lib/parseDecimal/index.js'

var matchOrdinalNumbersPattern = /^(\d+)(th|st|nd|rd)?/i

var matchWeekdaysPatterns = {
  short: /^(रवि|सोम|मंगल|बुध|गुरू|शुक्र|शनि)/i,
  long: /^(रविवार|सोमवार|मंगलवार|बुधवार|गुरूवार|शुक्रवार|शनिवार)/i
}

var parseWeekdayPatterns = {
  any: [/^रवि/i, /^सो/i, /^मं/i, /^बु/i, /^गु/i, /^शु/i, /^श/i]
}

var matchMonthsPatterns = {

  long: /^(जनवरी|फ़रवरी|मार्च|अप्रैल|मई|जून|जुलाई|अगस्त|सितंबर|अक्टूबर|नवंबर|दिसंबर)/i
}

var parseMonthPatterns = {
  any: [/^जन/i, /^फ़/i, /^मा/i, /^अप्रै/i, /^मई/i, /^जून/i, /^जुल/i, /^अग/i, /^सि/i, /^अ/i, /^न/i, /^दि/i]
}

var matchTimesOfDayPatterns = {
  short: /^(एम|पीम)/i,
  long: /^([एपी]\.?\s?m\.?)/i
}

var parseTimeOfDayPatterns = {
  any: [/^a/i, /^p/i]
}

var match = {
  ordinalNumbers: buildMatchPatternFn(matchOrdinalNumbersPattern),
  ordinalNumber: parseDecimal,
  weekdays: buildMatchFn(matchWeekdaysPatterns, 'long'),
  weekday: buildParseFn(parseWeekdayPatterns, 'any'),
  months: buildMatchFn(matchMonthsPatterns, 'long'),
  month: buildParseFn(parseMonthPatterns, 'any'),
  timesOfDay: buildMatchFn(matchTimesOfDayPatterns, 'long'),
  timeOfDay: buildParseFn(parseTimeOfDayPatterns, 'any')
}

export default match
