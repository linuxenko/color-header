### Color-Header

A bunch of console colors for coloring terminal output. Port of the entire "Escape-Sequence-Color-Header" to javascript with no dependencies.

### Usage 

**Text Attribute Options:**

  ATTRIBUTES_OFF, BOLD, UNDERSCORE, BLINK, REVERSE_VIDEO, CONCEALED
 
**Color Options:**

  BLACK, RED, GREEN, YELLOW, BLUE, MAGENTA, CYAN, WHITE
 
 **Format:**
 
  General Format, include value you want in $variable$
```
  COLOR_$Foreground Color$_$Background Color$
  COLOR_$Text Attribute$_$Foreground Color$_$Background Color$
  COLOR_NORMAL  // To set color to default
``` 
  e.g.
```
  COLOR_BLUE_BLACK // Leave Text Attribute Blank if no Text Attribute appied
  COLOR_UNDERSCORE_YELLOW_RED
  COLOR_NORMAL
``` 

### Screenshot of very small part of available colors

![screenshot](https://raw.githubusercontent.com/linuxenko/color-header/master/examples/screenshot.png)

### License

BSD 2-Clause, The original [Escape-Sequence-Color-Header.h](https://github.com/Uduse/Escape-Sequence-Color-Header)
