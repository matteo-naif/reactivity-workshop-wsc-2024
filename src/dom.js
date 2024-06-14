import { effect } from "./reactivity";

export const createElement = (tag, props) => {
    const element = document.createElement(tag)

    if(props && props.children){
        
        if(Array.isArray(props.children)) {

            props.children.forEach(child => {
                
                const node = getElement(child)
                if(node) element.appendChild(node)

            });

        } else {

            const node = getElement(props.children)
            if(node) element.appendChild(node)
        
        }

    }

    return element
}

const getElement = (child) => {
    switch (typeof child) {
            
        case "function":
            const textNode = document.createTextNode("")
            effect(() => { textNode.textContent = child() })
            return textNode;
    
        case "object":
            return child;    

        case "string":
            return document.createTextNode(child)

    }
}