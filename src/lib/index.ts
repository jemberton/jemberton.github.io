//! Whole file needs review

import { Router } from "vue-router"

export interface IMarkdownPost {
    title: string
    author?: string
    avatar?: string
    date: string
    email?: string[]
    github?: string[]
    body: string
}

export const parseDate = (datestamp: number) => {
    let parsedObject = new Date(datestamp)
    return parsedObject.toISOString()
}

export const parseImage = () => {
    console.log('lib/index.ts --> parseImage()')
}

export const parseHeadings = (line: string) => {
    if (line.startsWith('#')) {
        let symbols = line.match(/^\#+/g) || []
        let count = 0

        if (symbols.length > 0) {
            count = (symbols[0]?.match(/#/g) || []).length
            return line.replace(/^#+\s(.*)/g, `<h${ count } class="m-font">$1</h${ count }>`)
        }
    }

    return line
}

export const parseBlockQuote = (line: string) => {
    if (line.startsWith('>')) {
        return line.replace(/^\>\s(.+)/, '<blockquote class="bg-base p-lg rounded-xs font-retina m-md border-thin border-crust">$1</blockquote>')
    }

    return line
}

export const parseHorizontalRule = (line: string) => {
    if (line.startsWith('---')) {
        return "<hr>"
    }

    return line
}

export const parseMetadata = (metadata: string[]) => {
    let metadataHTML: IMarkdownPost = {
        title: "",
        author: "",
        avatar: "",
        date: "",
        email: [""],
        github: [""],
        body: ""
    }

    for (const data of metadata) {
        let key = data.trim().split(': ')
        
        if (key.length > 1) {
            switch (key[0]) {
                case "title":
                    metadataHTML.title = key[1]
                    break
                case "author":
                    metadataHTML.author = key[1]
                    break
                case "avatar":
                    metadataHTML.avatar = key[1]
                    break
                case "date":
                    metadataHTML.date = parseDate(parseInt(key[1]))
                    break
                case "email":
                    let emailData = key[1].split(' ')
                    metadataHTML.email = emailData
                    break
                case "github":
                    let githubData = key[1].split(' ')
                    metadataHTML.github = githubData
                    break
                default: break
            }
        }
    }

    return metadataHTML
}

export const parse = (markdown: string) => {
    console.log('full parser ...', markdown)
}

export function linkify(element: HTMLElement, router: Router) {
    const links = element.getElementsByClassName('router');
  
    Array.from(links).forEach((link: HTMLAnchorElement) => {
      if (link.hostname == window.location.hostname) {
        // ignore if onclick is already set
        // e.g. RouterLink
        if (link.onclick) {
          return;
        }
  
        link.onclick = (event: MouseEvent) => {
          const { altKey, ctrlKey, metaKey, shiftKey, button, defaultPrevented } = event;
          // ignore with control keys
          if (metaKey || altKey || ctrlKey || shiftKey) {
            return;
          }
  
          // ignore when preventDefault called
          // e.g. if it's a router-link
          if (defaultPrevented) {
            return;
          }
  
          // ignore right clicks
          if (button !== undefined && button !== 0) {
            return;
          }
  
          // ignore if `target="_blank"`
          const linkTarget = link.getAttribute('target');
          if (linkTarget && /\b_blank\b/i.test(linkTarget)) {
            return;
          }
  
          let url = null;
          try {
            url = new URL(link.href);
          } catch (err) {
            return;
          }
  
          const to = url.pathname;
          // ignore same page links with anchors
          if (url.hash && window.location.pathname === to) {
            return;
          }
  
          event.preventDefault();
          router.push(to);
        }
      }
    });
  }
