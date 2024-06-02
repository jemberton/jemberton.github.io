{
    title: Markdown Parser
    date: 1715124732378
    author: Josh
    email: @email real@email.com
    github: @jemberton https://github.com/jemberton
    avatar: josh.jpg
}

# heading 1

## heading 2

### heading 3

#### heading 4

##### heading 5

###### heading 6

**bold text**

*italic text*

This sentence has both **bold,** and *italic* text in it. This sentence has a single ***bold italic*** text entry.

This sentence has an asterisk *in it, but never has a closing mark. Until now ...* there is a closing mark.

Here is a line with complex italic text *this should all be italic, if things are working correctly* and it is likely they will not due to the current regex expression

> This is a blockquote that contains **bold**, *italic*, ***bold italic,*** and regular text! How much text is needed to break into a new line? I suppose that really varies as it will be greatly affected by the window size. Is this enough text to break on the current viewable window size? What about text that spans multiple lines? We need this to push the SVG icon into an uncomfortable position to make sure it stays at the top of the element vs centering.

---

>{danger} This is a danger blockquote

---

>{warning} This is a warning blockquote

---

>{radiation} This is a radiation blockquote

---

>{success} This is a success blockquote

---

>{info} This is an info blockquote

---

>{question} This is a question blockquote

---

1. Ordered List Item 1
2. Ordered List Item 2
3. Ordered List Item 3

- Unordered List Item 1
- Unordered List Item 2
- Unordered List Item 3

`inline code block with <b>html</b> style tags`

This is a line with `inline code` in it. This sentence has `inline code with <b>html</b> tags in it and *a italic* markdown *times* 2` too!

Yet another code line, but this time with **bold** text, *italic text*, ***bold italic*** and `code with valid **bold**, *italic*, ***bold italic*** markdown` in it

Here is a line with complex italic `text *this should all be italic, if things are working correctly* and` it is likely they will not due to the current regex expression

Complex code `variable["sub"] = mything("woohoo", { "text": "some text" })` is nice to show, but without syntax highlighting, it can be a bit difficult to read.

```plaintext 3-6
This is a plaintext codeblock

*weehoo*

myVariable = someValue + 'wee'
console.log(myVariable)
```

``` 2
firstLine = doNotHighlight()
secondLine = highlight()
thirdLine = doNotHighlight()
```

```plaintext
plain
```

```plaintext 1-3,5
line1
line2
line3
line4
line5
line6
```

This is a [[SHIFT]] [[ctrl]] keyboard key

Here is a `keyboard key [[alt]] in` a code block

---

[title](#)

We should also use a link [in the middle](#) of a sentence.

![Gramp's Porsche](/gramps-porsche.png)

[![Gramp's Porsche](/gramps-porsche.png)](https://google.com)

## Extended Syntax

These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.

### Table

| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

### Fenced Code Block

```
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

### Footnote

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

### Heading ID

### My Great Heading {#custom-id}

### Definition List

term
: definition

### Strikethrough

~~The world is flat.~~

### Task List

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

### Emoji

That is so funny! :joy:

(See also [Copying and Pasting Emoji](https://www.markdownguide.org/extended-syntax/#copying-and-pasting-emoji))

### Highlight

I need to highlight these ==very important words==.

### Subscript

H~2~O

### Superscript

X^2^
