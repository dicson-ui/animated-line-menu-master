var _tabswrap = $('.tabs-wrap');
var _tabs = $('.tabs-wrap a');
var _currenttab = $('.tabs-wrap a.active');
var _tablength = _tabs.length;
var _nthactivetab = _currenttab.attr('data-tab');
var _hline = $('.line');
var _linecount, _linepos;

_tabs.on('click', function(e){
    e.preventDefault();
    

    _this = $(this);
    if(_this.hasClass('active'))
        return false;

    _nthtab = +_this.attr('data-tab');
    _span = $(this).find('span').width();
    _borderradius = _this.width() - _span;
    
    _tabswrap.removeClass('rtol ltor');
    _tabs.removeClass('active');
    _this.addClass('active');


    if(_nthactivetab < _this.attr('data-tab')) {
        _tabswrap.addClass('rtol menurun');
        _linepos = Math.abs(_nthactivetab) -1;
        _hline.css({
            'left' : (_this.width()*_linepos)+(_borderradius/2)+'px'
        });
    } else if(_nthactivetab > _this.attr('data-tab')) {
        _tabswrap.addClass('ltor menurun');
        
        _linepos = (_this.width()*(_nthtab-1));
        _hline.css({
            'left' : _linepos+(_borderradius/2)+'px'
        });
        console.log(_linepos+" - test 1");
    } 

    _linecount = _nthactivetab - _this.attr('data-tab');
    _linecount = Math.abs(_linecount) + 1;

    _hline.css({
        'width' : ((_this.width()*_linecount)-_borderradius)+'px'
    });

    _nthactivetab = _nthtab;
    setTimeout(function(){ _tabswrap.removeClass('menurun'); }, 800);
});