## CSS Variables
- CSS begin to support variables
- define '--variable_name'   
```css
element {
  --main-bg-color: brown;
}
```
- using 'var(--variable_name)'   
```css
element {
  background-color: var(--main-bg-color);
}
```


## CSS pseudo class
```css
selector:pseudo-class{
    property:value;
}
//e.g
a:hover{
    color:blue;
}
```
- [reference](https://www.w3schools.com/css/css_pseudo_classes.asp)

## CSS pseudo elements
```css
selector::pseudo-element{
    property:value;
}
//e.g
h1::before{
    content:url(some.img)
}
```
