export default class CReact {
    static createElement(tag, attributes = {}, contents) {
        return {
            type: tag,
            props: { ...attributes, children: contents },
        }
    }

    static render(element, container) {
        const dom = document.createElement(element.type)
        const { children, ...attributes } = element.props
        Object.keys(attributes).forEach(key => {
            dom[key] = attributes[key]
        })

        const text = document.createTextNode("")
        text["nodeValue"] = children

        dom.appendChild(text)

        container.appendChild(dom)
    }
}