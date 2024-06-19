::: metadata
:::: author: Josh
:::: date: 1715124732378
:::: email: josh.emberton@proton.me
:::: avatar: josh.jpg
:::

# Test Post (dev)

If you're seeing this post, you are here *early*! Consider yourself ... uh ... lucky?!

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

> Here is an attempt at a multi
  line
  blockquote. Did it work?

---

> This is a danger blockquote
{.danger}

---

> This is a danger blockquote
{.danger-icon}

---

> This is a warning blockquote
{.warning}

---

> This is a warning blockquote
{.warning-icon}

---

> This is a radiation blockquote
{.radioactive}

---

> This is a radiation blockquote
{.radioactive-icon}

---

> This is a success blockquote
{.success}

---

> This is a success blockquote
{.success-icon}

---

> This is an info blockquote
{.info}

---
> This is an info blockquote
{.info-icon}

---

> This is a question blockquote
{.question}

---

> This is a question blockquote
{.question-icon}

---

## Inline Triggers

`inline code block with <b>html</b> style tags`

This is a line with `inline code` in it. This sentence has `inline code with <b>html</b> tags in it and *a italic* markdown *times* 2` too!

Yet another code line, but this time with **bold** text, *italic text*, ***bold italic*** and `code with valid **bold**, *italic*, ***bold italic*** markdown` in it

Here is a line with complex italic `text *this should all be italic, if things are working correctly* and` it is likely they will not due to the current regex expression

Complex code `variable["sub"] = mything("woohoo", { "text": "some text" })` is nice to show, but without syntax highlighting, it can be a bit difficult to read.

Here is a bit of code to `(see) => { return hljsIsWorking }`{.js} is working

```python
This is a plaintext codeblock

*weehoo*

myVariable = someValue + 'wee'
console.log(myVariable)
```

```ts
firstLine = doNotHighlight()
secondLine = highlight()
thirdLine = doNotHighlight()
```

```plaintext
this is a code line that is hopefully longer than a mobile device's screen is wide
```

```plaintext
line1
line2
line3
line4
line5
line6
```

```cpp
line2
line3
line4
line5
line6
line7
--- Line 8
+++ line8
line9
line10
line11
--- Line 12
+++ line12
```

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25,
  noquotes: true
}
```

This is a [[SHIFT]] [[ctrl]] keyboard key

Here is a `keyboard key [[alt]] in` a code block

---

[title](/#)

[Guides](/guides){.router}

We should also use a link [in the middle](/#) of a sentence.

And here is `[a link](/#)` in a code block

This is an [external](https://google.com) link

### Reflinks

[!ref title="Default Icon"](/guides)

[!ref icon="page" title="Paper Icon"](/projects)

[!ref icon="download" title="Download a file"](/contact)

[!ref icon="external" title="Google"](https://google.com)

---

![Project Smok - Top Songs (Apple Music)](/img/test-small.png "Project Smok - Top Songs (Apple Music)"){.center}

image in code `![Gramp's Porsche](/gramps-porsche.png)` block

[![Gramp's Porsche](/gramps-porsche.png "Gramp's Porsche")](https://google.com)

## Extended Syntax

These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.

### Insert and Delete

--Line 1--

++line1++

### Abbreviations

*[HTML]: Hyper Text Markup Language

*[W3C]:  World Wide Web Consortium

The HTML specification is maintained by the W3C.

### Table

| Syntax | Description | Column3 |
| :--- | :--- | :--- |
| Header | Title | Text |
| Paragraph | Text | Text |
| Footer | Text | Text |
| some other thing | more text | Text |
| less text | more text | Text |

### Footnote

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

Here's a second sentence with a footnote. [^2] This footnote is in the middle of a paragraph as opposed to being at the end.

[^2]: This is the second footnote definition.

Here is a footnote inside `[^3]` a code block

### Heading ID

### ! My Great Heading {#custom-id}

### ! Definition List

term
: definition

### Strikethrough

~~The world is flat.~~

### Lists

1. Ordered List Item 1
2. Ordered List Item 2
3. Ordered List Item 3

- Unordered List Item 1
- Unordered List Item 2
- Unordered List Item 3

### Task List

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

### Emoji

That is so funny! :joy:

We :heart: emojis!

Emjoi support provided by [node-emoji](https://github.com/omnidan/node-emoji)

(See also [Copying and Pasting Emoji](https://www.markdownguide.org/extended-syntax/#copying-and-pasting-emoji))

### Highlight

I need to highlight these ==very important words==.

### Subscript

Water is H~2~O

### Superscript

My equation is X^2^ = 5 + 3

### ! Superscript Subscript

This is a custom syntax for a combined super and subscript. For example Voltage~RMS~&^2^ or Voltage^2^&~RMS~
