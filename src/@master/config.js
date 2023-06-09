// ----------------------------------------------------------------
// # Configure
// ----------------------------------------------------------------
(function (getConfig) {
  window.masterCSSConfig = getConfig();
})(function () {
  // const breakpoints = {
  //   '3xs': 360,
  //   '2xs': 480,
  //   xs: 600,
  //   sm: 768,
  //   md: 1024,
  //   lg: 1280,
  //   xl: 1440,
  //   '2xl': 1600,
  //   '3xl': 1920,
  //   '4xl': 2560,
  // };

  const mediaQueries = {
    hover: '(any-hover:hover)',
  };

  const selectors = {
    _headings: '_:where(h1,h2,h3,h4,h5,h6)', // class="font:bold_headings"
  };

  const values = {
    '0x': 4,
    '1x': 8,
    '2x': 16,
    '3x': 24,
    '4x': 32,
    '5x': 40,
    header: 45,
  };

  const baseColors = {
    W: { 50: '#FFFFFF' },
    B: { 50: '#1D1D1D', 40: '#252525', 30: '#333333', 20: '#444444' },
    G: { 50: '#999999', 40: '#B2B2B2', 30: '#CBCBCB', 20: '#F2F2F2', 10: '#F8F8F8' },
    Y: { 50: '#FBC700', 20: '#FFECA0' },
  };

  const colors = {
    ...baseColors,
    success: '#269244',
    waring: '#D9730D',
    danger: '#E03E3E',
    info: '#2F80ED',
    link: '#0F62FE',

    theme: { '': 'brown-60', fg: '#FFFFFF' },
    fg: { '': '#333333' },
    bg: { '': '#FEFEFE', box: '#FEFEFE', btn: '#FEFEFE' },
  };

  const themes = {
    light: {},
    dark: {
      colors: {
        success: '#74A16A',
        waring: '#FFA344',
        danger: '#FF7369',
        link: '#529CCA',
        theme: { '': '#333333', fg: '#EEEEEE' },
        fg: { '': '#EEEEEE' },
        bg: { '': '#CCCCCC', box: '#777777', btn: '#777777' },
      },
    },
  };

  const rules = {
    boxShadow: {
      values: {
        xs: '0|1|2|0|B-50/.05',
        sm: '0|1|3|0|B-50/.1,0|1|2|-1|B-50/.1',
        md: '0|4|6|-1|B-50/.1,0|2|4|-2|B-50/.1',
        lg: '0|10|15|-3|B-50/.1,0|4|6|-4|B-50/.1',
        xl: '0|20|25|-5|B-50/.1,0 8|10|-6|B-50/.1',
        inner: 'inset|0|2|4|0|B-50/.05',
        none: '0|0|#0000',
      },
    },
    zIndex: {
      values: {
        header: 100000,
        modal: 100050,
        message: 100051,
        devPanel: 999999,
      },
    },
  };

  const semantics = {
    nowrap: { 'white-space': 'nowrap' },
    pointer: { cursor: 'pointer', 'user-select': 'none' },
    abs: {
      full: {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
      },
      center: {
        '': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
        },
        y: {
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
        },
        x: {
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
        },
      },
    },
  };

  const literal = window.masterCSSLiteral;
  const cls = {
    // 一般初始
    normal: {
      '': literal.toLine({
        '': 'm:0 p:0 f:16 lh:1.4 font-family:$(font)',
        '_:where(p),_headings': 'm:0',
        '_:where(kbd)': 'mx:0x p:0x r:0x f:12 fg:B-30 bg:W-50 b:1|solid|B-30/.5 shadow:sm',
      }),
    },
    // 滾動軸
    scrollbar: {
      '': literal.$`
        {w:1x;h:1x}::scrollbar
        {rounded}::scrollbar,::scrollbar-thumb
        bg:theme/.2::scrollbar
        bg:theme/.6::scrollbar-thumb
        bg:theme/.8::scrollbar-thumb:hover
        bg:theme::scrollbar-thumb:active
        bg:transparent::scrollbar-corner
      `,
    },
    // 頁首
    header: {
      '': literal.toLine({
        '': 'z:header top:0 w:full h:header bg:theme ~.2s opacity:1!:hover',
        '@<sm': 'fixed {mt:header}+*_$',
      }),
      '-fixed': literal.toLine({
        '': 'fixed!',
        '+*': 'mt:header',
      }),
    },
    // 容器
    container: {
      '': literal.$`
        mx:auto p:1x max-w:xl
      `,
    },
    // 連結
    link: {
      '': literal.toLine({
        '': 'rel inline-flex ai:center gap:5 fg:link text-decoration:none',
        transition: '~.2s fg:link/.8:hover fg:link/.6:active',
        '::before': "content:'' abs bottom:0.1em w:full bb:1|solid",
      }),
    },
    // 題目
    subject: {
      '': literal.toLine({
        '': 'flex center-content gap:2x {flex:1}::before,::after',
        '::before,::after': "content:'' bt:1|solid opacity:.2",
      }),
      block: literal.toLine({
        '': 'rel mx:auto mb:80 py:18 max-w:424 fg:theme t:center white-space:nowrap',
        '@<sm': 'py:12',
        '@<2xs': 'mb:56 max-w:240',
        '::before,::after': "content:'' abs w:116 h:1 bg:theme/.56",
        '::before': 'top:0 left:0 {w:100}@<sm',
        '::after': 'bottom:0 right:0 {w:100}@<sm',
        '>h2': literal.toLine({
          '': 'f:bold f:32 lh:35px',
          '@<2xs': 'f:20 lh:28px',
        }),
        '>h3': literal.toLine({
          '': 'pt:10 f:18 f:regular lh:25px fg:G-50',
          '@<2xs': 'pt:4 f:14 lh:20px',
        }),
      }),
    },
    // 卡片
    card: {
      '': literal.$`
        my:2x p:2x|3x
        r:1x overflow:hidden
        bg:bg-box
        shadow:lg
      `,
    },
    // 手風琴
    accordion: {
      '': literal.toLine({
        '': 'flex flex:wrap',
        '>*': 'w:full',
        // Toggle (hide)
        '>input': literal.toLine({
          '': 'z:-1 hide abs 0x0 opacity:0',
          ':checked~label_tk-icon[type=arrow]': 'rotate(-180deg)',
        }),
        // Arrow Icon
        '>label_tk-icon[type=arrow]': '~transform|.2s',
      }),
      // 標題
      title: literal.toLine({
        '': 'rel pointer',
        '::after': literal.toLine({
          '': "content:'+' abs right:1x",
          ':checked~': "content:'-'",
        }),
      }),
      // 內容
      content: literal.toLine({
        '': 'grid grid-template-rows:0fr opacity:0 overflow:hidden',
        transition: '~.2s transition-property:grid-template-rows,opacity,padding',
        ':checked~': 'grid-template-rows:1fr opacity:1 py:1x',
      }),
    },
    // 輸入框
    input: {
      '': literal.toLine({
        '': `
          box:border rel r:0x overflow:hidden
          flex ai:center jc:space-between h:4x
          fg:fg bg:bg-box b:1|solid|fg/.5
          ~.2s
        `,
        '[invalid]': 'border-color:danger {fg:danger}_.input-icon',
        '[valid]': 'border-color:success {fg:success}_.input-icon',
        '_.input-icon': 'fg:fg/.5',
        '>input': literal.toLine({
          '': 'box:border p:0x|1x full f:inherit fg:inherit bg:none b:none outline:none appearance:none',
          '::placeholder': 'fg:fg/.5;~.2s',
          ':focus::placeholder': 'opacity:0',
          ':not(:empty)::placeholder': 'translateY(-100%)',
        }),
      }),
      // 圖示
      icon: literal.$`
        block abs-center-y left:1x
        f:3x
        .input_{pl:4x}~input
      `,
      //
      title: literal.$`
        mb:1x {content:'*';fg:danger}[required]::before
      `,
      // 提示訊息
      msg: literal.$`
        f:12 fg:fg/.7 overflow:hidden
        ~.2s max-h:0 opacity:0 invisible
        {mt:0x;max-h:4x;opacity:1;visible}[show]
      `,
      // TODO: Placeholder
      label: literal.$`
        abs top:2x left:1x
        f:16 fg:fg/.5
        f:bold
        transform-origin:0|0
        transform:translate3d(0,0,0)
        ~.2s
        untouchable
      `,
      // TODO:
      focusBg: literal.$`
        z:-1 abs-full bg:fg/.05
        transform-origin:left
        transform:scaleX(0)
      `,
    },
    // 欄位
    field: {
      '': literal.$`{flex;ai:center}>p {flex:0|0|$(w,30%);f:bold}>p>span:nth(1)`,
    },
    // 清單
    list: {
      '': literal.$`
        lh:1.4;
        {m:0;p:0;counter-reset:item;list-style-type:none}_ol,_ul
        {m:0}_li
        {table;my:0.25em;counter-increment:item}_ol>li,_ul>li
        {table-cell;pr:0.5em;content:counters(item,'.')|'.';white-space:nowrap;word-break:initial}_ol>li::before
      `,
      '-nested': literal.$`
        {content:counters(item,'.')!}_li::before
      `,
      '-bracket': literal.$`
        {content:'('|counter(item)|')'!}_li::before
      `,
      '-none': literal.$`
        .list_{content:unset!}_li::before
      `,
    },
    // 表格
    table: {
      head: literal.$`
        grid-cols:$(cols,6)
        p:1x
        f:heavy t:center
        fg:theme
        bg:theme/.4
      `,
      body: literal.$`
        bg:theme/.1
        {max-h:50vh;overflow-y:auto}@sm
        {max-h:75vh;overflow-y:auto}@<sm
      `,
      tr: literal.$`
        rel ai:center
        {bg:theme/.15}:nth-child(odd)
        {bb:1|solid|theme/.3}:not(:last-of-type)
        {border-bottom-width:2}:not(:last-of-type)@<sm
        {grid-cols:$(cols,6);t:center}@sm
        {grid-rows:$(rows,3);t:left}@<sm
        {z:-1;content:'';abs-full;bg:theme;opacity:0;~opacity|.2s;untouchable}::before
        {opacity:.1;z:0}:hover::before
        {p:1x}>div@sm
        {p:0x}>div@<sm
      `,
    },
    // 骨架屏
    skeleton: {
      '': literal.$`
        rel overflow:hidden user-select:none
        bg:$(skeleton-bg,transparent)
        {content:'_';invisible}:is(.skeleton--text):before
        {content:'';abs-full;bg:linear-gradient(90deg,bg-box/.1|0%,bg-box/.5|20%,bg-box/.5|60%,bg-box/.1);translateX(-100%);@shimmer|2s|infinite}::after
      `,
    },
    // 旋轉
    spin: '@rotate|1.4s|linear|infinite',
  };

  const keyframes = {
    shimmer: { to: { transform: 'translateX(100%)' } },
    skeletonWave: { from: { backgroundPosition: '200% 0' }, to: { backgroundPosition: '-200% 0' } },
    rollIn: { from: { transform: 'translateY(-100%)' }, to: { transform: 'translateY(0)' } },
  };

  return {
    mediaQueries,
    selectors,
    values,
    colors,
    themes,
    rules,
    semantics,
    classes: cls,
    keyframes,
  };
});
