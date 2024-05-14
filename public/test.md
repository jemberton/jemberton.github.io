{
    title: Markdown Parser
    date: 1715124732378
    author: Josh
    avatar: josh.jpg
}

# Markdown Parser

this is a markdown file to be used as the blog content. I liked the idea of the metadata in JSON format, but that lacks an easy editing mode like Markdown.

Let's take a second and create a full markdown example ...

# heading 1

## heading 2

### heading 3

#### heading 4

##### heading 5

###### heading 6

**bold text**

*italic text*

This sentence has both **bold** and *italic* text in it. This sentence has a single ***bold italic*** text entry.

This sentence has an asterisk * in it, but never has a closing mark. Until now ... * there is a closing mark.

> This is a blockquote that contains **bold**, *italic*, ***bold italic***, and regular text!

1. Ordered List Item 1
2. Ordered List Item 2
3. Ordered List Item 3

- Unordered List Item 1
- Unordered List Item 2
- Unordered List Item 3

`inline code block`

```plaintext
This is a plaintext codeblock
```

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