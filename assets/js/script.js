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
    functionKey: document.getElementById('function'),
    windows: document.getElementById('windows'),
    leftAlt: document.getElementById('leftAlt'),
    spacebar: document.getElementById('spacebar'),
    rightAlt: document.getElementById('rightAlt'),
    rightControl: document.getElementById('rightControl'),
    leftArrow: document.getElementById('leftArrow'),
    rightArrow: document.getElementById('rightArrow'),
    upArrow: document.getElementById('upArrow'),
    downArrow: document.getElementById('downArrow')
  };

  function setTheme() {
    document.body.style.backgroundImage = localStorage.getItem('backgroundImage');
    document.body.style.backgroundSize = localStorage.getItem('backgroundSize');
    keyboardElement.style.border = localStorage.getItem('borderStyle');
    headingColor.style.color = localStorage.getItem('headingColor');
    instructionColor.style.color = localStorage.getItem('instructionColor');
  }

var rgbTheme = document.getElementById('rgb-theme');
var vaporwaveTheme = document.getElementById('vaporwave-theme');
var holidayTheme = document.getElementById('holiday-theme');
var keyboardElement = document.querySelector('.keyboard');



document.addEventListener('keydown', function(event) {
  if (event.key === ' ') {
    
    spacebar.style.backgroundColor = 'green';
    
  }
});

document.addEventListener('keyup', function(event) {
  if (event.key === ' ') {
    
    spacebar.style.backgroundColor = 'transparent'; 
    
  }
});



document.addEventListener('keydown', function(event) {
    if (event.key === '`') {
      
      backtick.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === '`') {
      
      backtick.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === '1') {
      
      num1.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === '1') {
      
      num1.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === '2') {
      
      num2.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === '2') {
      
      num2.style.backgroundColor = 'transparent'; 
      
    }
  });  

  document.addEventListener('keydown', function(event) {
    if (event.key === '3') {
      
      num3.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === '3') {
      
      num3.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === '4') {
      
      num4.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === '4') {
      
      num4.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === '5') {
      
      num5.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === '5') {
      
      num5.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === '6') {
      
      num6.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === '6') {
      
      num6.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === '7') {
      
      num7.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === '7') {
      
      num7.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === '8') {
      
      num8.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === '8') {
      
      num8.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === '9') {
      
      num9.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === '9') {
      
      num9.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === '0') {
      
      num0.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === '0') {
      
      num0.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === '-') {
      
      dash.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === '-') {
      
      dash.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === '=') {
      
      equals.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === '=') {
      
      equals.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Backspace' || event.code === 'Backspace') {
      event.preventDefault();
      backspace.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'Backspace' || event.code === 'Backspace') {
      event.preventDefault();
      backspace.style.backgroundColor = 'transparent'; 
      
    }
  });

 document.addEventListener('keydown', function(event) {
    if (event.key === 'q') {
      
      q.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'q') {
      
      q.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'w') {
      
      w.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'w') {
      
      w.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'e') {
      
      e.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'e') {
      
      e.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'r') {
      
      r.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'r') {
      
      r.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 't') {
      
      t.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 't') {
      
      t.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'y') {
      
      y.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'y') {
      
      y.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'u') {
      
      u.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'u') {
      
      u.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'i') {
      
      i.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'i') {
      
      i.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'o') {
      
      o.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'o') {
      
      o.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'p') {
      
      p.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'p') {
      
      p.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === '[') {
      
      openBracket.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === '[') {
      
      openBracket.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === ']') {
      
      closeBracket.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === ']') {
      
      closeBracket.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'CapsLock') {
      
      capsLock.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'CapsLock') {
      
      capsLock.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === '\\') {
      
      backslash.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === '\\') {
      
      backslash.style.backgroundColor = 'transparent'; 
      
    }
  });


  document.addEventListener('keydown', function(event) {
    if (event.key === 'a') {
      
      a.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'a') {
      
      a.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 's') {
      
      s.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 's') {
      
      s.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'd') {
      
      d.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'd') {
      
      d.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'f') {
      
      f.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'f') {
      
      f.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'g') {
      
      g.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'g') {
      
      g.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'h') {
      
      h.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'h') {
      
      h.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'j') {
      
      j.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'j') {
      
      j.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'k') {
      
      k.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'k') {
      
      k.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'l') {
      
      l.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'l') {
      
      l.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === ';') {
      
      semicolon.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === ';') {
      
      semicolon.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === '\'') {
      
      apostrophe.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === '\'') {
      
      apostrophe.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      
      enter.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      
      enter.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Shift' && event.code === 'ShiftLeft') {
      event.preventDefault();
      leftShift.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'Shift' && event.code === 'ShiftLeft') {
      event.preventDefault();
      leftShift.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Shift' && event.code === 'ShiftRight') {
      event.preventDefault();
      rightShift.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'Shift' && event.code === 'ShiftRight') {
      event.preventDefault();
      rightShift.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'z') {
      
      z.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'z') {
      
      z.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'x') {
      
      x.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'x') {
      
      x.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'c') {
      
      c.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'c') {
      
      c.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'v') {
      
      v.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'v') {
      
      v.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'b') {
      
      b.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'b') {
      
      b.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'n') {
      
      n.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'n') {
      
      n.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'm') {
      
      m.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'm') {
      
      m.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === ',') {
      
      comma.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === ',') {
      
      comma.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === '.') {
      
      period.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === '.') {
      
      period.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === '/') {
      
      forwardSlash.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === '/') {
      
      forwardSlash.style.backgroundColor = 'transparent'; 
      
    }
  });



  document.addEventListener('keydown', function(event) {
    if (event.key === 'Control' && event.code === 'ControlLeft') {
      
      leftControl.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'Control' && event.code === 'ControlLeft') {
      
      leftControl.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Control' && event.code === 'ControlRight') {
      
      rightControl.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'Control' && event.code === 'ControlRight') {
      
      rightControl.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Alt' && event.code === 'AltLeft') {
      event.preventDefault();
      leftAlt.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'Alt' && event.code === 'AltLeft') {
      event.preventDefault();
      leftAlt.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Alt' && event.code === 'AltRight') {
      event.preventDefault();
      rightAlt.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'Alt' && event.code === 'AltRight') {
      event.preventDefault();
      rightAlt.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      tab.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      tab.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Meta') {
      event.preventDefault();
      windows.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'Meta') {
      event.preventDefault();
      windows.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      event.preventDefault();
      esc.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'Escape') {
      event.preventDefault();
      esc.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'F1') {
      event.preventDefault();
      f1.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'F1') {
      event.preventDefault();
      f1.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'F2') {
      event.preventDefault();
      f2.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'F2') {
      event.preventDefault();
      f2.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'F3') {
      event.preventDefault();
      f3.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'F3') {
      event.preventDefault();
      f3.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'F4') {
      event.preventDefault();
      f4.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'F4') {
      event.preventDefault();
      f4.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'F5') {
      event.preventDefault();
      f5.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'F5') {
      event.preventDefault();
      f5.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'F6') {
      event.preventDefault();
      f6.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'F6') {
      event.preventDefault();
      f6.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'F7') {
      event.preventDefault();
      f7.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'F7') {
      event.preventDefault();
      f7.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'F8') {
      event.preventDefault();
      f8.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'F8') {
      event.preventDefault();
      f8.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'F9') {
      event.preventDefault();
      f9.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'F9') {
      event.preventDefault();
      f9.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'F10') {
      event.preventDefault();
      f10.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'F10') {
      event.preventDefault();
      f10.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'F11') {
      event.preventDefault();
      f11.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'F11') {
      event.preventDefault();
      f11.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'F12') {
      event.preventDefault();
      f12.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'F12') {
      event.preventDefault();
      f12.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Insert') {
      event.preventDefault();
      ins.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'Insert') {
      event.preventDefault();
      ins.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Delete') {
      event.preventDefault();
      del.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'Delete') {
      event.preventDefault();
      del.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      leftArrow.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      leftArrow.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      upArrow.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      upArrow.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      rightArrow.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      rightArrow.style.backgroundColor = 'transparent'; 
      
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      downArrow.style.backgroundColor = 'green';
      
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      downArrow.style.backgroundColor = 'transparent'; 
      
    }
  });


  vaporwaveTheme.addEventListener('click', function() {
    document.body.style.backgroundImage = 'url("https://external-preview.redd.it/LRmT8yJPpoqGulM3_Js5IskqmxqPwgb196NFUtX08oY.jpg?width=1080&crop=smart&auto=webp&s=dca4556b098568c33ed5e4b4d5d62d3c5de3ccbb")';
    document.body.style.backgroundSize = 'cover';
    keyboardElement.style.border = '5px solid purple';
    localStorage.setItem('backgroundImage', 'url("https://external-preview.redd.it/LRmT8yJPpoqGulM3_Js5IskqmxqPwgb196NFUtX08oY.jpg?width=1080&crop=smart&auto=webp&s=dca4556b098568c33ed5e4b4d5d62d3c5de3ccbb")');
    localStorage.setItem('backgroundSize', 'cover');
    localStorage.setItem('borderStyle', '5px solid purple');
    
  });

  rgbTheme.addEventListener('click', function() {
    document.body.style.backgroundImage = 'linear-gradient(45deg, #ff0000, #00ff00, #0000ff, #800080, #FF1493, #FFA500, #FFFF00, #00FFFF, #32CD32)';
    document.body.style.backgroundSize = '300% 300%';
    keyboardElement.style.border = 'solid';
    localStorage.setItem('backgroundImage', 'linear-gradient(45deg, #ff0000, #00ff00, #0000ff, #800080, #FF1493, #FFA500, #FFFF00, #00FFFF, #32CD32)');
    localStorage.setItem('backgroundSize', '300% 300%');
    localStorage.setItem('borderStyle', '5px solid');
    
});

holidayTheme.addEventListener('click', function() {
    document.body.style.backgroundImage = 'url("https://img.freepik.com/free-photo/christmas-fir-branch-with-copy-space_23-2148703386.jpg?w=1060&t=st=1700436216~exp=1700436816~hmac=f7c944f2e2cd83e9c5cb3d361bd716bb719ca6cf406b28ba53e6f4ee8471e473")';
    document.body.style.backgroundSize = 'cover';
    keyboardElement.style.border = 'solid red';
    localStorage.setItem('backgroundImage', 'url("https://img.freepik.com/free-photo/christmas-fir-branch-with-copy-space_23-2148703386.jpg?w=1060&t=st=1700436216~exp=1700436816~hmac=f7c944f2e2cd83e9c5cb3d361bd716bb719ca6cf406b28ba53e6f4ee8471e473")');
    localStorage.setItem('backgroundSize', 'cover');
    localStorage.setItem('borderStyle', '5px solid red');
    
  });
