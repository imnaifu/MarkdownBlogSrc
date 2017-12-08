### transition:
- allow to change property value smoothly (from one value to another), over a given duration
- must specify two things:
    - css property u want to add effect to
    - duration of the effect
```css
div {
    width: 100px;
    transition: width 2s, height 4s;
}

div:hover {
    width: 200px;
}
```

### transition-timing-function:
specifies the speed curve of the transition effect
e.g {transition-timing-function: ease;}
- ease: slow start, then fast and end slowly (default)
- linear: 
- ease-in:
- ease-out:
- ease-in-out:
- cubic-bezier(n,n,n,n):

### transition-delay:
specifies a delay (in seconds) for the transition effect
e.g {transition-delay: 1s;}