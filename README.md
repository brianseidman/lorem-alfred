# <img src='https://img.icons8.com/stickers/100/inscription.png' width='45' align='center' alt='Inscription icon'> Lorem Alfred

An Alfred workflow primarily for generating HTML-coded dummy text.

By default, this workflow pastes two paragraphs of lorem ipsum text wrapped in HTML `<p>` paragraph tags into your frontmost app. The workflow uses the [Loripsum.net](https://loripsum.net) API to generate the text.

Other options include choosing the number of paragraphs and pasting plain text instead of HTML. You can also access all the parameters of the API for further customization.

## Commands
|  |  |
|--|--|
|`li`|Generates two paragraphs of lorem ipsum text wrapped in `<p>` tags|
|`li #`|Enter a number to generate a specific amount of paragraphs wrapped in `<p>` tags (i.e., `li 3` will return three paragraphs)|
|`li/li #` + `Cmd`|Using the `Cmd` modifier will return the default or requested number of paragraphs in plain text|
|`li` + `Ctl`|Typing `li` plus the `Ctl` modifier will open an [Alfred Text View](https://www.alfredapp.com/help/workflows/user-interface/text/) with a list of all the [Loripsum.net](https://loripsum.net) API modifiers. Update the URL accordingly and press `Enter` to generate your code (modifiers include paragraph length and HTML markup snippets)|

## Credits
- [Loripsum.net](https://loripsum.net)
- [Inscription](https://icons8.com/icon/rvCy4MQeqqcx/inscription) icon by [Icons8](https://icons8.com).
