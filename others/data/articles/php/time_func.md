# Time Functions
1. time()
2. date()
3. strtotime()

## time()
- return current unix timestamp

## date(string $format, [$timestamp])
- if ($tiemstamp) return $timestamp in $format
- else return current time in $format

## strtotime(string $text_about_time)
- return unix timestamp from a input string (which describe the time)
- strtotime('now');
- strtotime('2001-01-04');
- not that correct, I think do not use

