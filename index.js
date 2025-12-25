(function (_0x4a2f0e, _0x1f0d6b) {
  const _0x2e6e6a = function (_0x3d1e9b) {
    while (--_0x3d1e9b) {
      _0x4a2f0e['push'](_0x4a2f0e['shift']());
    }
  };
  _0x2e6e6a(++_0x1f0d6b);
})(_0x5d38, 0x1a3);

const _0x1c45 = function (_0x2f5c2e, _0x44c3a2) {
  _0x2f5c2e = _0x2f5c2e - 0x0;
  let _0x1d5c3e = _0x5d38[_0x2f5c2e];
  if (_0x1c45['cache'] === undefined) {
    _0x1c45['cache'] = {};
  }
  if (_0x1c45['cache'][_0x2f5c2e]) {
    return _0x1c45['cache'][_0x2f5c2e];
  }
  const _0x4a7e = Buffer['from'](_0x1d5c3e, 'base64')['toString']();
  _0x1c45['cache'][_0x2f5c2e] = _0x4a7e;
  return _0x4a7e;
};

const _0x3b2e = require(_0x1c45('0'));
const _0x1fa2 = require(_0x1c45('1'));
const _0x55b4 = require(_0x1c45('2'));
const _0x4fd1 = require(_0x1c45('3'));
const _0x4b91 = require(_0x1c45('4'));
const _0x2f38 = require(_0x1c45('5'));
const _0x3a12 = require(_0x1c45('6'));
const { WebSocket: _0x13a5, createWebSocketStream: _0x41be } = require(_0x1c45('7'));

const _0x5c99 = process['env']['UUID'] || '497ab797-b449-4b66-b60e-3d3cc512e0c9';
const _0x2df2 = process['env']['DOMAIN'] || '1234.abc.com';
const _0x5e21 = process['env']['PORT'] || 7860;
const _0x4c8d = _0x5c99['replace'](/-/g, '');

const _0x12e0 = _0x1fa2['createServer']((_0x13cb, _0x51d1) => {
  if (_0x13cb['url'] === '/') {
    _0x51d1['end']('Hello world!');
  } else {
    _0x51d1['statusCode'] = 404;
    _0x51d1['end']('Not Found');
  }
});

const _0x1d77 = new _0x13a5['Server']({ 'server': _0x12e0 });

_0x1d77['on']('connection', (_0x4f6e, _0x2a77) => {
  _0x4f6e['once']('message', _0x5a2d => {
    try {
      const _0x44f1 = _0x5a2d['slice'](1, 17);
      const _0x2d09 = _0x44f1['every']((_0x29e1, _0x1c8a) => {
        return _0x29e1 === parseInt(_0x4c8d['substr'](_0x1c8a * 2, 2), 16);
      });
      if (!_0x2d09) return _0x4f6e['close']();

      const _0x56f3 = _0x41be(_0x4f6e);
      const _0x50ac = _0x3a12['connect']({ 'host': _0x2df2, 'port': 443 }, () => {
        _0x56f3['pipe'](_0x50ac)['pipe'](_0x56f3);
      });
    } catch (_0x1aa9) {
      _0x4f6e['close']();
    }
  });
});

_0x12e0['listen'](_0x5e21, () => {});
