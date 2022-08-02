import {URIlocal, URIprod} from './socket/config.socket'

function defineHostURI() {
  return document.location.host.indexOf('localhost')
    ? URIprod : URIlocal
}

export {
  defineHostURI,
}
