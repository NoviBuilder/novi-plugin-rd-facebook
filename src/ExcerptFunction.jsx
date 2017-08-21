export function validFacebook(element){
    if (!element) return false;
    return !hasValidAttribute(element);
}

function hasValidAttribute(element){
    return !novi.element.getAttribute(element, 'data-fb-id') && !novi.element.getAttribute(element, 'data-fb-access');
}
