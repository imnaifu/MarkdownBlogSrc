### Perl Regular Expression

### Basic
- seperator (/ # ~)
- meta character

### Greedy/Lazy mode
- greedy mode match as more as possible (* +)
- lazy mode match as less as possible (?)
- {2} match exactly 2 times,
- {2,3} match 2 or 3 times
- {2,} match 2 or more times
### PHP
- preg_match($pattern, $string, $matches)
    - return match times, 0 or 1
- preg_match_all($pattern, $string, $matches)
    - $match[0] is the whole 
    - $match[1] is the first subgroup depends on bracket ()
- preg_replace($pattern, $replacement, $matches)
~~~ php
$string = 'April 15, 2014';
$pattern = '/(\w+) (\d+), (\d+)/i';
$replacement = '$3, ${1} $2';
echo preg_replace($pattern, $replacement, $string); //结果为：2014, April 15
~~~
    

---
- **/**: start and end match
- **^**: match start of the string, or 'nothing but' inside []
- **$**: match end of the string
    - start and end often usd to validate the password or something
    - if add ^ and $, then only if the whole string is matching the pattern, return true
    - if not add ^ and $, partially string can also be returned
- **i**: case insensitive
- **.**: any character except newline
- **\***: match 0 or more times
- **+**: match 1 or more times
- **?**: match 0 or 1 times, or turn on lazy mode
- **|**: alternative
- **()**: grouping
- **[]**: set of characters
- **{}**: repetition modifier
- **/**: quote or special
- **\w**:  Match "word" character (alphanumeric plus "_")
- **\W**:  Match non-word character
- **\s**:  Match whitespace character
- **\S**:  Match non-whitespace character
- **\d**:  Match digit character
- **\D**:  Match non-digit character
- **word boundary**: like , | . | ! | space ....

http://www.troubleshooters.com/codecorn/littperl/perlreg.htm

- **everything inside the brackets represents ONE character**
- if($string =~ /[Clinton|Bush|Reagan]/){$office = "President"}

- Character classes have three main advantages:
    1. Shorthand notation, as [AEIOUY] instead of (A|E|I|O|U|Y). This advantage is minor at best.
    2. Character Ranges, such as [A-Z].
    3. One to one mapping from one class to another, as in tr/[a-z]/[A-Z]/. This is essential! It will be discussed in the section on translations.
- !  If an exclamation mark (!) occurs as the first character in a regular expression, all magic characters are treated as special characters. An exclamation mark is treated as a regular character if it occurs anywhere but at the very start of the regular expression.

- there are 14 metacharacters that must be preceded by a backslash "" in order to drop their special meaning and be treated literally inside an expression: the open/close square brackets, "[" and "]"; the backslash ""; the caret "^"; the dollar sign "$"; the period or dot "."; the vertical bar or pipe symbol "|"; the question mark "?"; the asterisk "*"; the plus-sign "+"; open/close curly braces, "{" and "}"; and open/close parenthesis, "(" and ")".[2]
- If you want to use any of these characters as a literal in a regex, you need to escape them with a backslash. For example, to match the arithmetic expression "(1+1)*3=6" with a regex, then the correct regex is "(1+1)*3=6". Otherwise, the parenthesis, plus-sign, and asterisk will have a special meaning.
