// script.js

var keys = {
    esc: document.getElementById('esc'),
    f1: document.getElementById('f1'),
    f2: document.getElementById('f2'),
    f3: document.getElementById('f3'),
    f4: document.getElementById('f4'),
    f5: document.getElementById('f5'),
    f6: document.getElementById('f6'),
    f7: document.getElementById('f7'),
    f8: document.getElementById('f8'),
    f9: document.getElementById('f9'),
    f10: document.getElementById('f10'),
    f11: document.getElementById('f11'),
    f12: document.getElementById('f12'),
    ins: document.getElementById('ins'),
    del: document.getElementById('del'),
    backtick: document.getElementById('backtick'),
    num1: document.getElementById('num1'),
    num2: document.getElementById('num2'),
    num3: document.getElementById('num3'),
    num4: document.getElementById('num4'),
    num5: document.getElementById('num5'),
    num6: document.getElementById('num6'),
    num7: document.getElementById('num7'),
    num8: document.getElementById('num8'),
    num9: document.getElementById('num9'),
    num0: document.getElementById('num0'),
    dash: document.getElementById('dash'),
    equals: document.getElementById('equals'),
    backspace: document.getElementById('backspace'),
    tab: document.getElementById('tab'),
    q: document.getElementById('q'),
    w: document.getElementById('w'),
    e: document.getElementById('e'),
    r: document.getElementById('r'),
    t: document.getElementById('t'),
    y: document.getElementById('y'),
    u: document.getElementById('u'),
    i: document.getElementById('i'),
    o: document.getElementById('o'),
    p: document.getElementById('p'),
    openBracket: document.getElementById('openBracket'),
    closeBracket: document.getElementById('closeBracket'),
    backslash: document.getElementById('backslash'),
    capsLock: document.getElementById('capsLock'),
    a: document.getElementById('a'),
    s: document.getElementById('s'),
    d: document.getElementById('d'),
    f: document.getElementById('f'),
    g: document.getElementById('g'),
    h: document.getElementById('h'),
    j: document.getElementById('j'),
    k: document.getElementById('k'),
    l: document.getElementById('l'),
    semicolon: document.getElementById('semicolon'),
    apostrophe: document.getElementById('apostrophe'),
    enter: document.getElementById('enter'),
    leftShift: document.getElementById('leftShift'),
    z: document.getElementById('z'),
    x: document.getElementById('x'),
    c: document.getElementById('c'),
    v: document.getElementById('v'),
    b: document.getElementById('b'),
    n: document.getElementById('n'),
    m: document.getElementById('m'),
    comma: document.getElementById('comma'),
    period: document.getElementById('period'),
    forwardSlash: document.getElementById('forwardSlash'),
    rightShift: document.getElementById('rightShift'),
    leftControl: document.getElementById('leftControl'),
    function: document.getElementById('function'),
    windows: document.getElementById('windows'),
    leftAlt: document.getElementById('leftAlt'),
    spacebar: document.getElementById('spacebar'),
    rightAlt: document.getElementById('rightAlt'),
    rightControl: document.getElementById('rightControl')
  };

document.addEventListener('keydown', function(event) {
  if (event.key === ' ') {
    
    spacebar.style.backgroundColor = 'green';
    
  }
});

document.addEventListener('keyup', function(event) {
  if (event.key === ' ') {
    
    spacebar.style.backgroundColor = '#fff'; 
    
  }
});



document.addEventListener('keydown', function(event) {
    if (event.key === '`') {
      
      backtick.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === '`') {
      
      backtick.style.backgroundColor = '#fff'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === '1') {
      
      num1.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === '1') {
      
      num1.style.backgroundColor = '#fff'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === '2') {
      
      num2.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === '2') {
      
      num2.style.backgroundColor = '#fff'; 
      
    }
  });  

  document.addEventListener('keydown', function(event) {
    if (event.key === '3') {
      
      num3.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === '3') {
      
      num3.style.backgroundColor = '#fff'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === '4') {
      
      num4.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === '4') {
      
      num4.style.backgroundColor = '#fff'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === '5') {
      
      num5.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === '5') {
      
      num5.style.backgroundColor = '#fff'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === '6') {
      
      num6.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === '6') {
      
      num6.style.backgroundColor = '#fff'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === '7') {
      
      num7.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === '7') {
      
      num7.style.backgroundColor = '#fff'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === '8') {
      
      num8.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === '8') {
      
      num8.style.backgroundColor = '#fff'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === '9') {
      
      num9.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === '9') {
      
      num9.style.backgroundColor = '#fff'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === '0') {
      
      num0.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === '0') {
      
      num0.style.backgroundColor = '#fff'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === '-') {
      
      dash.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === '-') {
      
      dash.style.backgroundColor = '#fff'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === '=') {
      
      equals.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === '=') {
      
      equals.style.backgroundColor = '#fff'; 
      
    }
  });


 document.addEventListener('keydown', function(event) {
    if (event.key === 'q') {
      
      q.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'q') {
      
      q.style.backgroundColor = '#fff'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'w') {
      
      w.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'w') {
      
      w.style.backgroundColor = '#fff'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'e') {
      
      e.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'e') {
      
      e.style.backgroundColor = '#fff'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'r') {
      
      r.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'r') {
      
      r.style.backgroundColor = '#fff'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 't') {
      
      t.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 't') {
      
      t.style.backgroundColor = '#fff'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'y') {
      
      y.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'y') {
      
      y.style.backgroundColor = '#fff'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'u') {
      
      u.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'u') {
      
      u.style.backgroundColor = '#fff'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'i') {
      
      i.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'i') {
      
      i.style.backgroundColor = '#fff'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'o') {
      
      o.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'o') {
      
      o.style.backgroundColor = '#fff'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'p') {
      
      p.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'p') {
      
      p.style.backgroundColor = '#fff'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'a') {
      
      a.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'a') {
      
      a.style.backgroundColor = '#fff'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 's') {
      
      s.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 's') {
      
      s.style.backgroundColor = '#fff'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'd') {
      
      d.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'd') {
      
      d.style.backgroundColor = '#fff'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'f') {
      
      f.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'f') {
      
      f.style.backgroundColor = '#fff'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'g') {
      
      g.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'g') {
      
      g.style.backgroundColor = '#fff'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'h') {
      
      h.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'h') {
      
      h.style.backgroundColor = '#fff'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'j') {
      
      j.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'j') {
      
      j.style.backgroundColor = '#fff'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'k') {
      
      k.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'k') {
      
      k.style.backgroundColor = '#fff'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'l') {
      
      l.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'l') {
      
      l.style.backgroundColor = '#fff'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'z') {
      
      z.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'z') {
      
      z.style.backgroundColor = '#fff'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'x') {
      
      x.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'x') {
      
      x.style.backgroundColor = '#fff'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'c') {
      
      c.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'c') {
      
      c.style.backgroundColor = '#fff'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'v') {
      
      v.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'v') {
      
      v.style.backgroundColor = '#fff'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'b') {
      
      b.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'b') {
      
      b.style.backgroundColor = '#fff'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'n') {
      
      n.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'n') {
      
      n.style.backgroundColor = '#fff'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'm') {
      
      m.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'm') {
      
      m.style.backgroundColor = '#fff'; 
      
    }
  });