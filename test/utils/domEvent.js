import simulant from 'simulant'

// ----------------------------------------
// Simulate DOM Events on real DOM nodes
// ----------------------------------------

/**
 * Generic method for dispatching an event on a DOM node.
 * @param {String|Object} node A querySelector string or DOM node.
 * @param {String} eventType A DOMString
 * @param {Object} [data] Additional event data.
 * @returns {Object} The event
 */
export const fire = (node, eventType, data = {}) => {
  const DOMNode = typeof node === 'string' ? document.querySelector(node) : node
  const event = simulant(eventType, data)

  return simulant.fire(DOMNode, event)
}

/**
 * Dispatch a 'keydown' event on a DOM node.
 * @param {String|Object} node A querySelector string or DOM node.
 * @param {Object} [data] Additional event data.
 * @returns {Object} The event
 */
export const keyDown = (node, data) => fire(node, 'keydown', data)

/**
 * Dispatch a 'mouseenter' event on a DOM node.
 * @param {String|Object} node A querySelector string or DOM node.
 * @param {Object} [data] Additional event data.
 * @returns {Object} The event
 */
export const mouseEnter = (node, data) => fire(node, 'mouseenter', data)

/**
 * Dispatch a 'mouseleave' event on a DOM node.
 * @param {String|Object} node A querySelector string or DOM node.
 * @param {Object} [data] Additional event data.
 * @returns {Object} The event
 */
export const mouseLeave = (node, data) => fire(node, 'mouseleave', data)

/**
 * Dispatch a 'mouseover' event on a DOM node.
 * @param {String|Object} node A querySelector string or DOM node.
 * @param {Object} [data] Additional event data.
 * @returns {Object} The event
 */
export const mouseOver = (node, data) => fire(node, 'mouseover', data)

/**
 * Dispatch a 'mouseup' event on a DOM node.
 * @param {String|Object} node A querySelector string or DOM node.
 * @param {Object} [data] Additional event data.
 * @returns {Object} The event
 */
export const mouseUp = (node, data) => fire(node, 'mouseup', data)

/**
 * Dispatch a 'click' event on a DOM node.
 * @param {String|Object} node A querySelector string or DOM node.
 * @param {Object} [data] Additional event data.
 * @returns {Object} The event
 */
export const click = (node, data) => fire(node, 'click', data)

export default {
  fire,
  mouseEnter,
  mouseLeave,
  mouseOver,
  mouseUp,
  keyDown,
  click,
}
