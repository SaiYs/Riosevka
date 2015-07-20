﻿{
    var r0_font, r0_glyphList, r0_glyphs, r0_Glyph, r0_Stroke, r0_para_regular, r0_para_bold, r0_para_italic, r0_para_bolditalic, r0_variantSelector, r0_globalTransform, r0_ITALICCOR, r0_UPWARD, r0_DOWNWARD, r0_RIGHTWARD, r0_LEFTWARD, r0_DESCENDER, r0_WIDTH, r0_CAP, r0_XH, r0_O, r0_OXHOOK, r0_SB, r0_HOOK, r0_AHOOK, r0_SHOOK, r0_SMOOTH, r0_SMALLSMOOTH, r0_STROKE, r0_DOTSIZE, r0_BARPOS, r0_GBARPOS, r0_LONGSERIF, r0_ACCENT, r0_XO, r0_CAPO, r0_HALFSTROKE, r0_RIGHTSB, r0_MIDDLE, r0_CAPMIDDLE, r0_CAP_SMOOTH, r0_DOTRADIUS, r0_SMOOTHA, r0_SMOOTHB, r0_SMALLSMOOTHA, r0_SMALLSMOOTHB, r0_ITALICCORS, r0_KAPPA, r0_COKAPPA, r0_BKAPPA, r0_COBKAPPA, r0_KAPPA_HOOK, r0_KAPPA_AHOOK, r0_TAILADJX, r0_TAILADJY, r0_TAILADJKAPPA, r0_BASE, r0_MARK, r0_MARKBASE, r0_tm, r0_markAboveLower, r0_markAboveCap, r0_markBelowLower, r0_markBelowZero, r0_capitalMarks, r0_bMarks, r0_eMarks, r0_pMarks, r0_Ring, r0_ORing, r0_leftwardTopSerif, r0_leftwardBottomSerif, r0_rightwardTopSerif, r0_rightwardBottomSerif, r0_xn$createglyph$7Hrq, r0_para, _r0_t0, _r0_t1, _r0_t2, _r0_t3, _r0_t4, _r0_t5, _r0_t6, _r0_t7, _r0_t8, _r0_t9, _r0_t10, _r0_t11, _r0_t12, _r0_t13, _r0_t14, _r0_t15, _r0_t16, _r0_t17, _r0_t18, _r0_t19, _r0_t20, _r0_t21, _r0_t22, _r0_t23, _r0_t24, _r0_t25, _r0_t26, _r0_t27, _r0_t28, _r0_t29, _r0_t30, _r0_t31, _r0_t32, _r0_t33, _r0_t34, _r0_t35, _r0_t36, _r0_t37, _r0_t38, _r0_t39, _r0_t40, _r0_t41, _r0_t42, _r0_t43, _r0_t44, _r0_t45, _r0_t46, _r0_t47, _r0_t48, _r0_t49, _r0_t50, _r0_t51, _r0_t52, _r0_t53, _r0_t54, _r0_t55, _r0_t56, _r0_t57, _r0_t58, _r0_t59, _r0_t60, _r0_t61, _r0_t62, _r0_t63, _r0_t64, _r0_t65, _r0_t66, _r0_t67, _r0_t68, _r0_t69, _r0_t70, _r0_t71, _r0_t72, _r0_t73, _r0_t74;
    r0_font = require('./empty.json');
    r0_glyphList = r0_font['glyf'];
    r0_glyphs = { '.notdef': r0_glyphList[0] };
    r0_Glyph = require('./support/glyph')['Glyph'];
    r0_Stroke = require('./support/stroke')['Stroke'];
    r0_para_regular = {
        'width': 500,
        'stroke': 80,
        'dotsize': 125,
        'sb': 50,
        'cap': 771,
        'xheight': 560,
        'hook': 145,
        'ahook': 135,
        'shook': 100,
        'smooth': 192,
        'smallsmooth': 242,
        'smoothadjust': 100,
        'o': -8,
        'oxhook': 0,
        'descender': -178,
        'kappa': 0.515,
        'italicangle': 0,
        'barpos': 0.44,
        'gbarpos': 0.37,
        'longserif': 175,
        'accent': 175
    };
    r0_para_bold = Object['create'](r0_para_regular);
    r0_para_bold['stroke'] = 114;
    r0_para_bold['dotsize'] = 150;
    r0_para_bold['barpos'] = 0.42;
    r0_para_bold['hook'] = 150;
    r0_para_bold['ahook'] = 100;
    r0_para_bold['oxhook'] = 0;
    r0_para_bold['kappa_hook'] = 0.7;
    r0_para_bold['kappa_ahook'] = 0.6;
    r0_para_italic = Object['create'](r0_para_regular);
    r0_para_italic['italicangle'] = 10;
    r0_para_bolditalic = Object['create'](r0_para_bold);
    r0_para_bolditalic['italicangle'] = 10;
    r0_para = r0_para_bolditalic;
    r0_variantSelector = { 'zero': 'slashed' };
    r0_globalTransform = {
        'xx': 1,
        'yx': Math['tan'](r0_para['italicangle'] / 180 * Math['PI']),
        'xy': 0,
        'yy': 1,
        'x': 0,
        'y': 0
    };
    r0_ITALICCOR = 1 / Math['sqrt'](1 - r0_globalTransform['yx'] * r0_globalTransform['yx']);
    r0_UPWARD = {
        'x': -r0_ITALICCOR,
        'y': 0
    };
    r0_DOWNWARD = {
        'x': r0_ITALICCOR,
        'y': 0
    };
    r0_RIGHTWARD = {
        'x': r0_globalTransform['yx'],
        'y': 1
    };
    r0_LEFTWARD = {
        'x': -r0_globalTransform['yx'],
        'y': -1
    };
    r0_DESCENDER = r0_para['descender'];
    r0_WIDTH = r0_para['width'];
    r0_CAP = r0_para['cap'];
    r0_XH = r0_para['xheight'];
    r0_O = r0_para['o'];
    r0_OXHOOK = r0_para['oxhook'];
    r0_SB = r0_para['sb'];
    r0_HOOK = r0_para['hook'];
    r0_AHOOK = r0_para['ahook'];
    r0_SHOOK = r0_para['shook'];
    r0_SMOOTH = r0_para['smooth'];
    r0_SMALLSMOOTH = r0_para['smallsmooth'];
    r0_STROKE = r0_para['stroke'];
    r0_DOTSIZE = r0_para['dotsize'];
    r0_BARPOS = r0_para['barpos'];
    r0_GBARPOS = r0_para['gbarpos'];
    r0_LONGSERIF = r0_para['longserif'];
    r0_ACCENT = r0_para['accent'];
    r0_XO = r0_XH - r0_O;
    r0_CAPO = r0_CAP - r0_O;
    r0_HALFSTROKE = r0_STROKE / 2;
    r0_RIGHTSB = r0_WIDTH - r0_SB;
    r0_MIDDLE = r0_WIDTH / 2;
    r0_CAPMIDDLE = r0_CAP / 2;
    r0_CAP_SMOOTH = r0_CAP - r0_SMOOTH;
    r0_DOTRADIUS = r0_para['dotsize'] / 2;
    r0_SMOOTHA = r0_SMOOTH - r0_globalTransform['yx'] * r0_para['smoothadjust'];
    r0_SMOOTHB = r0_SMOOTH + r0_globalTransform['yx'] * r0_para['smoothadjust'];
    r0_SMALLSMOOTHA = r0_SMALLSMOOTH - r0_globalTransform['yx'] * r0_para['smoothadjust'];
    r0_SMALLSMOOTHB = r0_SMALLSMOOTH + r0_globalTransform['yx'] * r0_para['smoothadjust'];
    r0_ITALICCORS = r0_STROKE * r0_globalTransform['yx'];
    r0_KAPPA = r0_para['kappa'];
    r0_COKAPPA = 1 - r0_KAPPA;
    r0_BKAPPA = r0_KAPPA + 0.1;
    r0_COBKAPPA = 1 - r0_BKAPPA;
    r0_KAPPA_HOOK = r0_para['kappa_hook'] || 0.7;
    r0_KAPPA_AHOOK = r0_para['kappa_ahook'] || r0_KAPPA_HOOK;
    r0_TAILADJX = r0_WIDTH * 0.2;
    r0_TAILADJY = r0_XH * 0.25;
    r0_TAILADJKAPPA = 0.75;
    r0_BASE = 'base';
    r0_MARK = 'mark';
    r0_MARKBASE = 'markbase';
    r0_tm = function _r0_t0(r1_anchor) {
        var r1_anchor;
        return {
            'x': r1_anchor['x'] * r0_globalTransform['xx'] + r1_anchor['y'] * r0_globalTransform['yx'] + r0_globalTransform['x'],
            'y': r1_anchor['x'] * r0_globalTransform['xy'] + r1_anchor['y'] * r0_globalTransform['yy'] + r0_globalTransform['y'],
            'type': r1_anchor['type']
        };
    };
    r0_markAboveLower = {
        'anchors': {
            'above': r0_tm({
                'x': r0_MIDDLE,
                'y': r0_XH,
                'type': r0_BASE
            })
        }
    };
    r0_markAboveCap = {
        'anchors': {
            'above': r0_tm({
                'x': r0_MIDDLE,
                'y': r0_CAP,
                'type': r0_BASE
            })
        }
    };
    r0_markBelowLower = {
        'anchors': {
            'below': r0_tm({
                'x': r0_MIDDLE,
                'y': r0_DESCENDER,
                'type': r0_BASE
            })
        }
    };
    r0_markBelowZero = {
        'anchors': {
            'below': r0_tm({
                'x': r0_MIDDLE,
                'y': 0,
                'type': r0_BASE
            })
        }
    };
    r0_capitalMarks = {
        'anchors': {
            'above': r0_markAboveCap['anchors']['above'],
            'below': r0_markBelowZero['anchors']['below']
        }
    };
    r0_bMarks = {
        'anchors': {
            'above': r0_markAboveCap['anchors']['above'],
            'below': r0_markBelowZero['anchors']['below']
        }
    };
    r0_eMarks = {
        'anchors': {
            'above': r0_markAboveLower['anchors']['above'],
            'below': r0_markBelowZero['anchors']['below']
        }
    };
    r0_pMarks = {
        'anchors': {
            'above': r0_markAboveLower['anchors']['above'],
            'below': r0_markBelowLower['anchors']['below']
        }
    };
    r0_Stroke['bindParameters'](r0_para);
    r0_Ring = function _r0_t1(r2_u, r2_d, r2_l, r2_r) {
        var r2_u, r2_d, r2_l, r2_r, r2_my, r2_mx, r2_s;
        r2_my = (r2_u + r2_d) / 2;
        r2_mx = (r2_l + r2_r) / 2;
        r2_s = new r0_Stroke()['set-transform'](r0_globalTransform)['start-from'](r2_mx, r2_d)['cubic-to'](r2_mx + (r2_l - r2_mx) * r0_BKAPPA, r2_d, r2_l, r2_my + (r2_d - r2_my) * r0_BKAPPA, r2_l, r2_my)['cubic-to'](r2_l, r2_my + (r2_u - r2_my) * r0_BKAPPA, r2_mx + (r2_l - r2_mx) * r0_BKAPPA, r2_u, r2_mx, r2_u)['cubic-to'](r2_mx + (r2_r - r2_mx) * r0_BKAPPA, r2_u, r2_r, r2_my + (r2_u - r2_my) * r0_BKAPPA, r2_r, r2_my)['cubic-to'](r2_r, r2_my + (r2_d - r2_my) * r0_BKAPPA, r2_mx + (r2_r - r2_mx) * r0_BKAPPA, r2_d, r2_mx, r2_d);
        return r2_s['points'];
    };
    r0_ORing = function _r0_t2(r3_u, r3_d, r3_l, r3_r, r3_smooth) {
        var r3_u, r3_d, r3_l, r3_r, r3_smooth, r3_myu, r3_myd, r3_mx, r3_s;
        r3_myu = r3_u - r3_smooth;
        r3_myd = r3_d + r3_smooth;
        r3_mx = (r3_l + r3_r) / 2;
        r3_s = new r0_Stroke()['set-transform'](r0_globalTransform)['start-from'](r3_mx, r3_d)['cubic-to'](r3_mx + (r3_l - r3_mx) * r0_BKAPPA, r3_d, r3_l, r3_myd + (r3_d - r3_myd) * r0_BKAPPA, r3_l, r3_myd)['line-to'](r3_l, r3_myu)['cubic-to'](r3_l, r3_myu + (r3_u - r3_myu) * r0_BKAPPA, r3_mx + (r3_l - r3_mx) * r0_BKAPPA, r3_u, r3_mx, r3_u)['cubic-to'](r3_mx + (r3_r - r3_mx) * r0_BKAPPA, r3_u, r3_r, r3_myu + (r3_u - r3_myu) * r0_BKAPPA, r3_r, r3_myu)['line-to'](r3_r, r3_myd)['cubic-to'](r3_r, r3_myd + (r3_d - r3_myd) * r0_BKAPPA, r3_mx + (r3_r - r3_mx) * r0_BKAPPA, r3_d, r3_mx, r3_d);
        return r3_s['points'];
    };
    r0_leftwardTopSerif = function _r0_t3(r4_x, r4_y, r4_length) {
        var r4_x, r4_y, r4_length;
        return new r0_Stroke()['set-transform'](r0_globalTransform)['start-from'](r4_x + r0_HALFSTROKE, r4_y)['heads-to'](r0_LEFTWARD)['set-width'](r0_STROKE, 0)['line-to'](r4_x - r4_length - r0_globalTransform['yx'] * r0_STROKE, r4_y)['form-stroke']();
    };
    r0_leftwardBottomSerif = function _r0_t4(r5_x, r5_y, r5_length) {
        var r5_x, r5_y, r5_length;
        return new r0_Stroke()['set-transform'](r0_globalTransform)['start-from'](r5_x + r0_HALFSTROKE, r5_y)['heads-to'](r0_LEFTWARD)['set-width'](0, r0_STROKE)['line-to'](r5_x - r5_length + r0_globalTransform['yx'] * r0_STROKE, r5_y)['form-stroke']();
    };
    r0_rightwardTopSerif = function _r0_t5(r6_x, r6_y, r6_length) {
        var r6_x, r6_y, r6_length;
        return new r0_Stroke()['set-transform'](r0_globalTransform)['start-from'](r6_x - r0_HALFSTROKE, r6_y)['heads-to'](r0_RIGHTWARD)['set-width'](0, r0_STROKE)['line-to'](r6_x + r6_length - r0_globalTransform['yx'] * r0_STROKE, r6_y)['form-stroke']();
    };
    r0_rightwardBottomSerif = function _r0_t6(r7_x, r7_y, r7_length) {
        var r7_x, r7_y, r7_length;
        return new r0_Stroke()['set-transform'](r0_globalTransform)['start-from'](r7_x - r0_HALFSTROKE, r7_y)['heads-to'](r0_RIGHTWARD)['set-width'](r0_STROKE, 0)['line-to'](r7_x + r7_length + r0_globalTransform['yx'] * r0_STROKE, r7_y)['form-stroke']();
    };
    r0_xn$createglyph$7Hrq = function _r0_t7(r12_name, r12_actions) {
        var r12_name, r12_actions, r12_glyphObject;
        r12_glyphObject = new r0_Glyph(r12_name);
        r0_glyphList['push'](r12_glyphObject);
        r0_glyphs[r12_name] = r12_glyphObject;
        r12_actions['call'](r12_glyphObject);
        return r12_glyphObject;
    };
    r0_xn$createglyph$7Hrq('space', function _r0_t8() {
        var r14_xn$setwidth$9Jrj, r14_xn$assignunicode$7Hrq, r14_xn$startfrom$1aao, r14_xn$lineto$5sIl, r14_xn$curveto$1aao, r14_xn$cubicto$1aao, r14_xn$putshapes$9Jrj, r14_xn$reverselast$3qIs, r14_include, r14_xn$createstroke$7Hrq, r14_xn$setanchor$9Jrj, _r14_t0;
        _r14_t0 = this;
        r14_xn$setwidth$9Jrj = _r14_t0['set-width']['bind'](_r14_t0);
        r14_xn$assignunicode$7Hrq = _r14_t0['assign-unicode']['bind'](_r14_t0);
        r14_xn$startfrom$1aao = _r14_t0['start-from']['bind'](_r14_t0);
        r14_xn$lineto$5sIl = _r14_t0['line-to']['bind'](_r14_t0);
        r14_xn$curveto$1aao = _r14_t0['curve-to']['bind'](_r14_t0);
        r14_xn$cubicto$1aao = _r14_t0['cubic-to']['bind'](_r14_t0);
        r14_xn$putshapes$9Jrj = _r14_t0['put-shapes']['bind'](_r14_t0);
        r14_xn$reverselast$3qIs = _r14_t0['reverse-last']['bind'](_r14_t0);
        r14_include = _r14_t0['include']['bind'](_r14_t0);
        r14_xn$createstroke$7Hrq = _r14_t0['create-stroke']['bind'](_r14_t0);
        r14_xn$setanchor$9Jrj = _r14_t0['set-anchor']['bind'](_r14_t0);
        _r14_t0['gizmo'] = r0_globalTransform;
        _r14_t0['set-width'](r0_WIDTH);
        r14_xn$setwidth$9Jrj(r0_WIDTH);
        r14_xn$assignunicode$7Hrq(' ');
        return void 0;
    });
    r0_xn$createglyph$7Hrq('bar', function _r0_t9() {
        var r16_xn$setwidth$9Jrj, r16_xn$assignunicode$7Hrq, r16_xn$startfrom$1aao, r16_xn$lineto$5sIl, r16_xn$curveto$1aao, r16_xn$cubicto$1aao, r16_xn$putshapes$9Jrj, r16_xn$reverselast$3qIs, r16_include, r16_xn$createstroke$7Hrq, r16_xn$setanchor$9Jrj, _r16_t0;
        _r16_t0 = this;
        r16_xn$setwidth$9Jrj = _r16_t0['set-width']['bind'](_r16_t0);
        r16_xn$assignunicode$7Hrq = _r16_t0['assign-unicode']['bind'](_r16_t0);
        r16_xn$startfrom$1aao = _r16_t0['start-from']['bind'](_r16_t0);
        r16_xn$lineto$5sIl = _r16_t0['line-to']['bind'](_r16_t0);
        r16_xn$curveto$1aao = _r16_t0['curve-to']['bind'](_r16_t0);
        r16_xn$cubicto$1aao = _r16_t0['cubic-to']['bind'](_r16_t0);
        r16_xn$putshapes$9Jrj = _r16_t0['put-shapes']['bind'](_r16_t0);
        r16_xn$reverselast$3qIs = _r16_t0['reverse-last']['bind'](_r16_t0);
        r16_include = _r16_t0['include']['bind'](_r16_t0);
        r16_xn$createstroke$7Hrq = _r16_t0['create-stroke']['bind'](_r16_t0);
        r16_xn$setanchor$9Jrj = _r16_t0['set-anchor']['bind'](_r16_t0);
        _r16_t0['gizmo'] = r0_globalTransform;
        _r16_t0['set-width'](r0_WIDTH);
        r16_xn$setwidth$9Jrj(r0_WIDTH);
        r16_xn$assignunicode$7Hrq('|');
        r16_xn$putshapes$9Jrj(r16_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE, r0_DESCENDER / 2)['set-width'](r0_STROKE / 2, r0_STROKE / 2)['line-to'](r0_MIDDLE, r0_CAP - r0_DESCENDER / 2)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('A', function _r0_t10() {
        var r18_xn$setwidth$9Jrj, r18_xn$assignunicode$7Hrq, r18_xn$startfrom$1aao, r18_xn$lineto$5sIl, r18_xn$curveto$1aao, r18_xn$cubicto$1aao, r18_xn$putshapes$9Jrj, r18_xn$reverselast$3qIs, r18_include, r18_xn$createstroke$7Hrq, r18_xn$setanchor$9Jrj, r18_TURN, r18_leftbar, r18_rightbar, r18_hbar, _r18_t0;
        _r18_t0 = this;
        r18_xn$setwidth$9Jrj = _r18_t0['set-width']['bind'](_r18_t0);
        r18_xn$assignunicode$7Hrq = _r18_t0['assign-unicode']['bind'](_r18_t0);
        r18_xn$startfrom$1aao = _r18_t0['start-from']['bind'](_r18_t0);
        r18_xn$lineto$5sIl = _r18_t0['line-to']['bind'](_r18_t0);
        r18_xn$curveto$1aao = _r18_t0['curve-to']['bind'](_r18_t0);
        r18_xn$cubicto$1aao = _r18_t0['cubic-to']['bind'](_r18_t0);
        r18_xn$putshapes$9Jrj = _r18_t0['put-shapes']['bind'](_r18_t0);
        r18_xn$reverselast$3qIs = _r18_t0['reverse-last']['bind'](_r18_t0);
        r18_include = _r18_t0['include']['bind'](_r18_t0);
        r18_xn$createstroke$7Hrq = _r18_t0['create-stroke']['bind'](_r18_t0);
        r18_xn$setanchor$9Jrj = _r18_t0['set-anchor']['bind'](_r18_t0);
        _r18_t0['gizmo'] = r0_globalTransform;
        _r18_t0['set-width'](r0_WIDTH);
        r18_xn$setwidth$9Jrj(r0_WIDTH);
        r18_xn$assignunicode$7Hrq('A');
        r18_include(r0_capitalMarks);
        r18_TURN = r0_XH * 0.1;
        r18_leftbar = r18_xn$createstroke$7Hrq();
        r18_leftbar['start-from'](r0_SB, 0)['heads-to'](r0_UPWARD)['set-width'](0, r0_STROKE)['line-to'](r0_SB, r18_TURN)['heads-to'](r0_UPWARD)['curve-to'](r0_SB, r18_TURN + 0.27 * (r0_CAP - r18_TURN), r0_MIDDLE - r0_STROKE / 2, r0_CAP)['set-width'](0, r0_STROKE * 0.8);
        r18_rightbar = r18_xn$createstroke$7Hrq();
        r18_rightbar['start-from'](r0_RIGHTSB, 0)['heads-to'](r0_UPWARD)['set-width'](r0_STROKE, 0)['line-to'](r0_RIGHTSB, r18_TURN)['heads-to'](r0_UPWARD)['curve-to'](r0_RIGHTSB, r18_TURN + 0.27 * (r0_CAP - r18_TURN), r0_MIDDLE + r0_STROKE / 2, r0_CAP)['set-width'](r0_STROKE * 0.8, 0);
        r18_hbar = r18_xn$createstroke$7Hrq()['start-from'](r0_SB + r0_STROKE, r0_XH / 2)['heads-to'](r0_RIGHTWARD)['set-width'](0, r0_STROKE)['line-to'](r0_RIGHTSB - r0_STROKE, r0_XH / 2)['heads-to'](r0_RIGHTWARD);
        r18_xn$putshapes$9Jrj(r18_leftbar['form-stroke']());
        r18_xn$putshapes$9Jrj(r18_hbar['form-stroke']());
        r18_xn$putshapes$9Jrj(r18_rightbar['form-stroke']());
        r18_xn$startfrom$1aao(r0_MIDDLE - r0_STROKE / 2, r0_CAP);
        r18_xn$lineto$5sIl(r0_MIDDLE + r0_STROKE / 2, r0_CAP);
        r18_xn$lineto$5sIl(r0_MIDDLE, r0_CAP - r0_STROKE);
        return void 0;
    });
    r0_xn$createglyph$7Hrq('X', function _r0_t11() {
        var r20_xn$setwidth$9Jrj, r20_xn$assignunicode$7Hrq, r20_xn$startfrom$1aao, r20_xn$lineto$5sIl, r20_xn$curveto$1aao, r20_xn$cubicto$1aao, r20_xn$putshapes$9Jrj, r20_xn$reverselast$3qIs, r20_include, r20_xn$createstroke$7Hrq, r20_xn$setanchor$9Jrj, r20_TURN, r20_straight, r20_strench, r20_barone, r20_bartwo, _r20_t0;
        _r20_t0 = this;
        r20_xn$setwidth$9Jrj = _r20_t0['set-width']['bind'](_r20_t0);
        r20_xn$assignunicode$7Hrq = _r20_t0['assign-unicode']['bind'](_r20_t0);
        r20_xn$startfrom$1aao = _r20_t0['start-from']['bind'](_r20_t0);
        r20_xn$lineto$5sIl = _r20_t0['line-to']['bind'](_r20_t0);
        r20_xn$curveto$1aao = _r20_t0['curve-to']['bind'](_r20_t0);
        r20_xn$cubicto$1aao = _r20_t0['cubic-to']['bind'](_r20_t0);
        r20_xn$putshapes$9Jrj = _r20_t0['put-shapes']['bind'](_r20_t0);
        r20_xn$reverselast$3qIs = _r20_t0['reverse-last']['bind'](_r20_t0);
        r20_include = _r20_t0['include']['bind'](_r20_t0);
        r20_xn$createstroke$7Hrq = _r20_t0['create-stroke']['bind'](_r20_t0);
        r20_xn$setanchor$9Jrj = _r20_t0['set-anchor']['bind'](_r20_t0);
        _r20_t0['gizmo'] = r0_globalTransform;
        _r20_t0['set-width'](r0_WIDTH);
        r20_xn$setwidth$9Jrj(r0_WIDTH);
        r20_xn$assignunicode$7Hrq('X');
        r20_include(r0_capitalMarks);
        r20_TURN = r0_XH * 0.05;
        r20_straight = 0.6;
        r20_strench = 0.125;
        r20_barone = r20_xn$createstroke$7Hrq()['start-from'](r0_SB + r0_HALFSTROKE, 0)['set-width'](r0_HALFSTROKE, r0_HALFSTROKE)['heads-to'](r0_UPWARD)['line-to'](r0_SB + r0_HALFSTROKE, r20_TURN)['curve-to'](r0_SB + r0_HALFSTROKE, r20_TURN + r20_strench * (r0_CAP - r20_TURN), r0_MIDDLE + r20_straight * (r0_SB + r0_HALFSTROKE - r0_MIDDLE), r0_CAPMIDDLE + r20_straight * (r20_TURN + r20_strench * (r0_CAP - r20_TURN) - r0_CAPMIDDLE))['line-to'](r0_MIDDLE + r20_straight * (r0_RIGHTSB - r0_HALFSTROKE - r0_MIDDLE), r0_CAPMIDDLE + r20_straight * (r0_CAP - r20_TURN - r20_strench * (r0_CAP - r20_TURN) - r0_CAPMIDDLE))['curve-to'](r0_RIGHTSB - r0_HALFSTROKE, r0_CAP - r20_TURN - r20_strench * (r0_CAP - r20_TURN), r0_RIGHTSB - r0_HALFSTROKE, r0_CAP - r20_TURN)['line-to'](r0_RIGHTSB - r0_HALFSTROKE, r0_CAP)['heads-to'](r0_UPWARD);
        r20_bartwo = r20_xn$createstroke$7Hrq()['start-from'](r0_RIGHTSB - r0_HALFSTROKE, 0)['set-width'](r0_HALFSTROKE, r0_HALFSTROKE)['heads-to'](r0_UPWARD)['line-to'](r0_RIGHTSB - r0_HALFSTROKE, r20_TURN)['curve-to'](r0_RIGHTSB - r0_HALFSTROKE, r20_TURN + r20_strench * (r0_CAP - r20_TURN), r0_MIDDLE + r20_straight * (r0_RIGHTSB - r0_HALFSTROKE - r0_MIDDLE), r0_CAPMIDDLE + r20_straight * (r20_TURN + r20_strench * (r0_CAP - r20_TURN) - r0_CAPMIDDLE))['line-to'](r0_MIDDLE + r20_straight * (r0_SB + r0_HALFSTROKE - r0_MIDDLE), r0_CAPMIDDLE + r20_straight * (r0_CAP - r20_TURN - r20_strench * (r0_CAP - r20_TURN) - r0_CAPMIDDLE))['curve-to'](r0_SB + r0_HALFSTROKE, r0_CAP - r20_TURN - r20_strench * (r0_CAP - r20_TURN), r0_SB + r0_HALFSTROKE, r0_CAP - r20_TURN)['line-to'](r0_SB + r0_HALFSTROKE, r0_CAP)['heads-to'](r0_UPWARD);
        r20_xn$putshapes$9Jrj(r20_barone['form-stroke']());
        r20_xn$putshapes$9Jrj(r20_bartwo['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('Y', function _r0_t12() {
        var r22_xn$setwidth$9Jrj, r22_xn$assignunicode$7Hrq, r22_xn$startfrom$1aao, r22_xn$lineto$5sIl, r22_xn$curveto$1aao, r22_xn$cubicto$1aao, r22_xn$putshapes$9Jrj, r22_xn$reverselast$3qIs, r22_include, r22_xn$createstroke$7Hrq, r22_xn$setanchor$9Jrj, r22_TURN, r22_straight, r22_strench, r22_cross, r22_barone, r22_bartwo, _r22_t0;
        _r22_t0 = this;
        r22_xn$setwidth$9Jrj = _r22_t0['set-width']['bind'](_r22_t0);
        r22_xn$assignunicode$7Hrq = _r22_t0['assign-unicode']['bind'](_r22_t0);
        r22_xn$startfrom$1aao = _r22_t0['start-from']['bind'](_r22_t0);
        r22_xn$lineto$5sIl = _r22_t0['line-to']['bind'](_r22_t0);
        r22_xn$curveto$1aao = _r22_t0['curve-to']['bind'](_r22_t0);
        r22_xn$cubicto$1aao = _r22_t0['cubic-to']['bind'](_r22_t0);
        r22_xn$putshapes$9Jrj = _r22_t0['put-shapes']['bind'](_r22_t0);
        r22_xn$reverselast$3qIs = _r22_t0['reverse-last']['bind'](_r22_t0);
        r22_include = _r22_t0['include']['bind'](_r22_t0);
        r22_xn$createstroke$7Hrq = _r22_t0['create-stroke']['bind'](_r22_t0);
        r22_xn$setanchor$9Jrj = _r22_t0['set-anchor']['bind'](_r22_t0);
        _r22_t0['gizmo'] = r0_globalTransform;
        _r22_t0['set-width'](r0_WIDTH);
        r22_xn$setwidth$9Jrj(r0_WIDTH);
        r22_xn$assignunicode$7Hrq('Y');
        r22_include(r0_capitalMarks);
        r22_TURN = r0_XH * 0.05;
        r22_straight = 0.6;
        r22_strench = 0.15;
        r22_cross = r0_CAP * 0.4;
        r22_barone = r22_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE, r22_cross)['set-width'](r0_HALFSTROKE, r0_HALFSTROKE)['line-to'](r0_MIDDLE + r22_straight * (r0_RIGHTSB - r0_HALFSTROKE - r0_MIDDLE), r22_cross + r22_straight * (r0_CAP - r22_TURN - r22_strench * (r0_CAP - r22_TURN) - r22_cross))['curve-to'](r0_RIGHTSB - r0_HALFSTROKE, r0_CAP - r22_TURN - r22_strench * (r0_CAP - r22_TURN), r0_RIGHTSB - r0_HALFSTROKE, r0_CAP - r22_TURN)['line-to'](r0_RIGHTSB - r0_HALFSTROKE, r0_CAP)['heads-to'](r0_UPWARD);
        r22_bartwo = r22_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE, r22_cross)['set-width'](r0_HALFSTROKE, r0_HALFSTROKE)['line-to'](r0_MIDDLE + r22_straight * (r0_SB + r0_HALFSTROKE - r0_MIDDLE), r22_cross + r22_straight * (r0_CAP - r22_TURN - r22_strench * (r0_CAP - r22_TURN) - r22_cross))['curve-to'](r0_SB + r0_HALFSTROKE, r0_CAP - r22_TURN - r22_strench * (r0_CAP - r22_TURN), r0_SB + r0_HALFSTROKE, r0_CAP - r22_TURN)['line-to'](r0_SB + r0_HALFSTROKE, r0_CAP)['heads-to'](r0_UPWARD);
        r22_xn$putshapes$9Jrj(r22_barone['form-stroke']());
        r22_xn$putshapes$9Jrj(r22_bartwo['form-stroke']());
        r22_xn$putshapes$9Jrj(r22_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE, 0)['set-width'](r0_HALFSTROKE, r0_HALFSTROKE)['heads-to'](r0_UPWARD)['line-to'](r0_MIDDLE, r22_cross + r0_HALFSTROKE)['heads-to'](r0_UPWARD)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('B', function _r0_t13() {
        var r24_xn$setwidth$9Jrj, r24_xn$assignunicode$7Hrq, r24_xn$startfrom$1aao, r24_xn$lineto$5sIl, r24_xn$curveto$1aao, r24_xn$cubicto$1aao, r24_xn$putshapes$9Jrj, r24_xn$reverselast$3qIs, r24_include, r24_xn$createstroke$7Hrq, r24_xn$setanchor$9Jrj, r24_bowl, r24_tkappa, r24_bkappa, r24_turntop, r24_turnbottom, r24_topbowl, r24_bottombowl, r24_leftbar, _r24_t0;
        _r24_t0 = this;
        r24_xn$setwidth$9Jrj = _r24_t0['set-width']['bind'](_r24_t0);
        r24_xn$assignunicode$7Hrq = _r24_t0['assign-unicode']['bind'](_r24_t0);
        r24_xn$startfrom$1aao = _r24_t0['start-from']['bind'](_r24_t0);
        r24_xn$lineto$5sIl = _r24_t0['line-to']['bind'](_r24_t0);
        r24_xn$curveto$1aao = _r24_t0['curve-to']['bind'](_r24_t0);
        r24_xn$cubicto$1aao = _r24_t0['cubic-to']['bind'](_r24_t0);
        r24_xn$putshapes$9Jrj = _r24_t0['put-shapes']['bind'](_r24_t0);
        r24_xn$reverselast$3qIs = _r24_t0['reverse-last']['bind'](_r24_t0);
        r24_include = _r24_t0['include']['bind'](_r24_t0);
        r24_xn$createstroke$7Hrq = _r24_t0['create-stroke']['bind'](_r24_t0);
        r24_xn$setanchor$9Jrj = _r24_t0['set-anchor']['bind'](_r24_t0);
        _r24_t0['gizmo'] = r0_globalTransform;
        _r24_t0['set-width'](r0_WIDTH);
        r24_xn$setwidth$9Jrj(r0_WIDTH);
        r24_xn$assignunicode$7Hrq('B');
        r24_include(r0_capitalMarks);
        r24_bowl = 451;
        r24_tkappa = r0_COKAPPA - 0.22;
        r24_bkappa = r0_COKAPPA - 0.2;
        r24_turntop = (r0_CAP + (r24_bowl - r0_STROKE)) / 2;
        r24_turnbottom = r24_bowl / 2;
        r24_topbowl = r24_xn$createstroke$7Hrq();
        r24_topbowl['start-from'](r0_SB, r0_CAP)['heads-to'](r0_RIGHTWARD)['line-to'](r0_RIGHTSB - r0_SB * 0.5 - r24_turnbottom, r0_CAP)['cubic-to'](r0_RIGHTSB - r0_SB * 0.5 - r24_tkappa * r24_turnbottom, r0_CAP, r0_RIGHTSB - r0_SB * 0.5, r24_turntop + (r0_CAP - r24_turntop) * r0_KAPPA, r0_RIGHTSB - r0_SB * 0.5, r24_turntop)['cubic-to'](r0_RIGHTSB - r0_SB * 0.5, r24_turntop + r0_KAPPA * (r24_bowl - r0_STROKE - r24_turntop), r0_RIGHTSB - r0_SB * 0.5 - r24_tkappa * r24_turnbottom, r24_bowl - r0_STROKE, r0_RIGHTSB - r0_SB * 0.5 - r24_turnbottom, r24_bowl - r0_STROKE)['line-to'](r0_SB, r24_bowl - r0_STROKE)['heads-to'](r0_LEFTWARD);
        r24_bottombowl = r24_xn$createstroke$7Hrq();
        r24_bottombowl['start-from'](r0_SB, 0)['heads-to'](r0_RIGHTWARD)['line-to'](r0_RIGHTSB - r24_turnbottom, 0)['cubic-to'](r0_RIGHTSB - r24_bkappa * r24_turnbottom, 0, r0_RIGHTSB, r24_turnbottom * r0_KAPPA, r0_RIGHTSB, r24_turnbottom)['cubic-to'](r0_RIGHTSB, r24_turnbottom + r0_KAPPA * (r24_bowl - r24_turnbottom), r0_RIGHTSB - r24_bkappa * r24_turnbottom, r24_bowl, r0_RIGHTSB - r24_turnbottom, r24_bowl)['line-to'](r0_SB, r24_bowl)['heads-to'](r0_LEFTWARD);
        r24_leftbar = r24_xn$createstroke$7Hrq()['start-from'](r0_SB, 0)['heads-to'](r0_UPWARD)['line-to'](r0_SB, r0_CAP)['heads-to'](r0_UPWARD);
        r24_xn$putshapes$9Jrj(r24_topbowl['form-stroke'](0, r0_STROKE));
        r24_xn$putshapes$9Jrj(r24_bottombowl['form-stroke'](r0_STROKE, 0));
        r24_xn$putshapes$9Jrj(r24_leftbar['form-stroke'](0, r0_STROKE));
        return void 0;
    });
    r0_xn$createglyph$7Hrq('D', function _r0_t14() {
        var r26_xn$setwidth$9Jrj, r26_xn$assignunicode$7Hrq, r26_xn$startfrom$1aao, r26_xn$lineto$5sIl, r26_xn$curveto$1aao, r26_xn$cubicto$1aao, r26_xn$putshapes$9Jrj, r26_xn$reverselast$3qIs, r26_include, r26_xn$createstroke$7Hrq, r26_xn$setanchor$9Jrj, r26_dsmooth, r26_bsmooth, r26_bkappa, r26_leftbar, r26_bowl, _r26_t0;
        _r26_t0 = this;
        r26_xn$setwidth$9Jrj = _r26_t0['set-width']['bind'](_r26_t0);
        r26_xn$assignunicode$7Hrq = _r26_t0['assign-unicode']['bind'](_r26_t0);
        r26_xn$startfrom$1aao = _r26_t0['start-from']['bind'](_r26_t0);
        r26_xn$lineto$5sIl = _r26_t0['line-to']['bind'](_r26_t0);
        r26_xn$curveto$1aao = _r26_t0['curve-to']['bind'](_r26_t0);
        r26_xn$cubicto$1aao = _r26_t0['cubic-to']['bind'](_r26_t0);
        r26_xn$putshapes$9Jrj = _r26_t0['put-shapes']['bind'](_r26_t0);
        r26_xn$reverselast$3qIs = _r26_t0['reverse-last']['bind'](_r26_t0);
        r26_include = _r26_t0['include']['bind'](_r26_t0);
        r26_xn$createstroke$7Hrq = _r26_t0['create-stroke']['bind'](_r26_t0);
        r26_xn$setanchor$9Jrj = _r26_t0['set-anchor']['bind'](_r26_t0);
        _r26_t0['gizmo'] = r0_globalTransform;
        _r26_t0['set-width'](r0_WIDTH);
        r26_xn$setwidth$9Jrj(r0_WIDTH);
        r26_xn$assignunicode$7Hrq('D');
        r26_include(r0_capitalMarks);
        r26_dsmooth = r0_SMOOTH * 1.55;
        r26_bsmooth = r0_SMOOTH * 1.3;
        r26_bkappa = r0_COKAPPA - 0.2;
        r26_leftbar = r26_xn$createstroke$7Hrq()['start-from'](r0_SB, 0)['heads-to'](r0_UPWARD)['line-to'](r0_SB, r0_CAP)['heads-to'](r0_UPWARD);
        r26_bowl = r26_xn$createstroke$7Hrq();
        r26_bowl['start-from'](r0_SB, 0)['heads-to'](r0_RIGHTWARD)['line-to'](r0_RIGHTSB - r26_bsmooth, 0)['cubic-to'](r0_RIGHTSB - r26_bkappa * r26_bsmooth, 0, r0_RIGHTSB, r0_COBKAPPA * r26_dsmooth, r0_RIGHTSB, r26_dsmooth)['line-to'](r0_RIGHTSB, r0_CAP - r26_dsmooth)['cubic-to'](r0_RIGHTSB, r0_CAP - r0_COBKAPPA * r26_dsmooth, r0_RIGHTSB - r26_bkappa * r26_bsmooth, r0_CAP, r0_RIGHTSB - r26_bsmooth, r0_CAP)['line-to'](r0_SB, r0_CAP)['heads-to'](r0_LEFTWARD);
        r26_xn$putshapes$9Jrj(r26_bowl['form-stroke'](r0_STROKE, 0));
        r26_xn$putshapes$9Jrj(r26_leftbar['form-stroke'](0, r0_STROKE));
        return void 0;
    });
    r0_xn$createglyph$7Hrq('P', function _r0_t15() {
        var r28_xn$setwidth$9Jrj, r28_xn$assignunicode$7Hrq, r28_xn$startfrom$1aao, r28_xn$lineto$5sIl, r28_xn$curveto$1aao, r28_xn$cubicto$1aao, r28_xn$putshapes$9Jrj, r28_xn$reverselast$3qIs, r28_include, r28_xn$createstroke$7Hrq, r28_xn$setanchor$9Jrj, r28_bowl, r28_bkappa, r28_turntop, r28_turnbottom, r28_topbowl, r28_leftbar, _r28_t0;
        _r28_t0 = this;
        r28_xn$setwidth$9Jrj = _r28_t0['set-width']['bind'](_r28_t0);
        r28_xn$assignunicode$7Hrq = _r28_t0['assign-unicode']['bind'](_r28_t0);
        r28_xn$startfrom$1aao = _r28_t0['start-from']['bind'](_r28_t0);
        r28_xn$lineto$5sIl = _r28_t0['line-to']['bind'](_r28_t0);
        r28_xn$curveto$1aao = _r28_t0['curve-to']['bind'](_r28_t0);
        r28_xn$cubicto$1aao = _r28_t0['cubic-to']['bind'](_r28_t0);
        r28_xn$putshapes$9Jrj = _r28_t0['put-shapes']['bind'](_r28_t0);
        r28_xn$reverselast$3qIs = _r28_t0['reverse-last']['bind'](_r28_t0);
        r28_include = _r28_t0['include']['bind'](_r28_t0);
        r28_xn$createstroke$7Hrq = _r28_t0['create-stroke']['bind'](_r28_t0);
        r28_xn$setanchor$9Jrj = _r28_t0['set-anchor']['bind'](_r28_t0);
        _r28_t0['gizmo'] = r0_globalTransform;
        _r28_t0['set-width'](r0_WIDTH);
        r28_xn$setwidth$9Jrj(r0_WIDTH);
        r28_xn$assignunicode$7Hrq('P');
        r28_include(r0_capitalMarks);
        r28_bowl = r0_CAPMIDDLE;
        r28_bkappa = r0_COKAPPA - 0.2;
        r28_turntop = (r0_CAP + (r28_bowl - r0_HALFSTROKE)) / 2;
        r28_turnbottom = r28_bowl / 2;
        r28_topbowl = r28_xn$createstroke$7Hrq()['start-from'](r0_SB * 1.25, r0_CAP)['heads-to'](r0_RIGHTWARD)['line-to'](r0_RIGHTSB - r28_turnbottom, r0_CAP)['arc-hv-to'](r0_RIGHTSB - r0_O, r28_turntop)['arc-vh-to'](r0_RIGHTSB - r28_turnbottom, r28_bowl - r0_HALFSTROKE)['line-to'](r0_SB * 1.25, r28_bowl - r0_HALFSTROKE)['heads-to'](r0_LEFTWARD);
        r28_leftbar = r28_xn$createstroke$7Hrq()['start-from'](r0_SB * 1.25, 0)['heads-to'](r0_UPWARD)['line-to'](r0_SB * 1.25, r0_CAP)['heads-to'](r0_UPWARD);
        r28_xn$putshapes$9Jrj(r28_topbowl['form-stroke'](0, r0_STROKE));
        r28_xn$putshapes$9Jrj(r28_leftbar['form-stroke'](0, r0_STROKE));
        return void 0;
    });
    r0_xn$createglyph$7Hrq('R', function _r0_t16() {
        var r30_xn$setwidth$9Jrj, r30_xn$assignunicode$7Hrq, r30_xn$startfrom$1aao, r30_xn$lineto$5sIl, r30_xn$curveto$1aao, r30_xn$cubicto$1aao, r30_xn$putshapes$9Jrj, r30_xn$reverselast$3qIs, r30_include, r30_xn$createstroke$7Hrq, r30_xn$setanchor$9Jrj, r30_TURN, r30_right, _r30_t0;
        _r30_t0 = this;
        r30_xn$setwidth$9Jrj = _r30_t0['set-width']['bind'](_r30_t0);
        r30_xn$assignunicode$7Hrq = _r30_t0['assign-unicode']['bind'](_r30_t0);
        r30_xn$startfrom$1aao = _r30_t0['start-from']['bind'](_r30_t0);
        r30_xn$lineto$5sIl = _r30_t0['line-to']['bind'](_r30_t0);
        r30_xn$curveto$1aao = _r30_t0['curve-to']['bind'](_r30_t0);
        r30_xn$cubicto$1aao = _r30_t0['cubic-to']['bind'](_r30_t0);
        r30_xn$putshapes$9Jrj = _r30_t0['put-shapes']['bind'](_r30_t0);
        r30_xn$reverselast$3qIs = _r30_t0['reverse-last']['bind'](_r30_t0);
        r30_include = _r30_t0['include']['bind'](_r30_t0);
        r30_xn$createstroke$7Hrq = _r30_t0['create-stroke']['bind'](_r30_t0);
        r30_xn$setanchor$9Jrj = _r30_t0['set-anchor']['bind'](_r30_t0);
        _r30_t0['gizmo'] = r0_globalTransform;
        _r30_t0['set-width'](r0_WIDTH);
        r30_xn$setwidth$9Jrj(r0_WIDTH);
        r30_xn$assignunicode$7Hrq('R');
        r30_include(r0_glyphs['P'], true);
        r30_TURN = r0_XH * 0.1;
        r30_right = r0_RIGHTSB - r0_O;
        r30_xn$putshapes$9Jrj(r30_xn$createstroke$7Hrq()['start-from'](r30_right - r0_HALFSTROKE, 0)['heads-to'](r0_UPWARD)['set-width'](r0_HALFSTROKE, r0_HALFSTROKE)['curve-to'](r30_right - r0_HALFSTROKE, r30_TURN + 0.2 * (r0_XH - r30_TURN), r0_MIDDLE, r0_CAPMIDDLE)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('C', function _r0_t17() {
        var r32_xn$setwidth$9Jrj, r32_xn$assignunicode$7Hrq, r32_xn$startfrom$1aao, r32_xn$lineto$5sIl, r32_xn$curveto$1aao, r32_xn$cubicto$1aao, r32_xn$putshapes$9Jrj, r32_xn$reverselast$3qIs, r32_include, r32_xn$createstroke$7Hrq, r32_xn$setanchor$9Jrj, r32_outline, _r32_t0;
        _r32_t0 = this;
        r32_xn$setwidth$9Jrj = _r32_t0['set-width']['bind'](_r32_t0);
        r32_xn$assignunicode$7Hrq = _r32_t0['assign-unicode']['bind'](_r32_t0);
        r32_xn$startfrom$1aao = _r32_t0['start-from']['bind'](_r32_t0);
        r32_xn$lineto$5sIl = _r32_t0['line-to']['bind'](_r32_t0);
        r32_xn$curveto$1aao = _r32_t0['curve-to']['bind'](_r32_t0);
        r32_xn$cubicto$1aao = _r32_t0['cubic-to']['bind'](_r32_t0);
        r32_xn$putshapes$9Jrj = _r32_t0['put-shapes']['bind'](_r32_t0);
        r32_xn$reverselast$3qIs = _r32_t0['reverse-last']['bind'](_r32_t0);
        r32_include = _r32_t0['include']['bind'](_r32_t0);
        r32_xn$createstroke$7Hrq = _r32_t0['create-stroke']['bind'](_r32_t0);
        r32_xn$setanchor$9Jrj = _r32_t0['set-anchor']['bind'](_r32_t0);
        _r32_t0['gizmo'] = r0_globalTransform;
        _r32_t0['set-width'](r0_WIDTH);
        r32_xn$setwidth$9Jrj(r0_WIDTH);
        r32_xn$assignunicode$7Hrq('C');
        r32_include(r0_capitalMarks);
        r32_outline = r32_xn$createstroke$7Hrq();
        r32_outline['start-from'](r0_RIGHTSB - r0_OXHOOK, r0_CAP - r0_HOOK)['curve-to'](r0_MIDDLE + r0_KAPPA_HOOK * (r0_MIDDLE - r0_para['sb']), r0_CAPO, r0_MIDDLE, r0_CAPO)['heads-to'](r0_LEFTWARD)['arc-hv-to'](r0_SB, r0_CAP - r0_SMOOTHA)['line-to'](r0_SB, r0_SMOOTHB)['arc-vh-to'](r0_MIDDLE, r0_O)['heads-to'](r0_RIGHTWARD)['curve-to'](r0_MIDDLE + r0_ITALICCORS + r0_KAPPA_HOOK * (r0_MIDDLE - r0_SB), r0_O, r0_RIGHTSB - r0_OXHOOK, r0_HOOK);
        r32_xn$putshapes$9Jrj(r32_outline['form-stroke'](r0_STROKE, 0));
        return void 0;
    });
    r0_xn$createglyph$7Hrq('G', function _r0_t18() {
        var r34_xn$setwidth$9Jrj, r34_xn$assignunicode$7Hrq, r34_xn$startfrom$1aao, r34_xn$lineto$5sIl, r34_xn$curveto$1aao, r34_xn$cubicto$1aao, r34_xn$putshapes$9Jrj, r34_xn$reverselast$3qIs, r34_include, r34_xn$createstroke$7Hrq, r34_xn$setanchor$9Jrj, r34_outline, r34_bar, _r34_t0;
        _r34_t0 = this;
        r34_xn$setwidth$9Jrj = _r34_t0['set-width']['bind'](_r34_t0);
        r34_xn$assignunicode$7Hrq = _r34_t0['assign-unicode']['bind'](_r34_t0);
        r34_xn$startfrom$1aao = _r34_t0['start-from']['bind'](_r34_t0);
        r34_xn$lineto$5sIl = _r34_t0['line-to']['bind'](_r34_t0);
        r34_xn$curveto$1aao = _r34_t0['curve-to']['bind'](_r34_t0);
        r34_xn$cubicto$1aao = _r34_t0['cubic-to']['bind'](_r34_t0);
        r34_xn$putshapes$9Jrj = _r34_t0['put-shapes']['bind'](_r34_t0);
        r34_xn$reverselast$3qIs = _r34_t0['reverse-last']['bind'](_r34_t0);
        r34_include = _r34_t0['include']['bind'](_r34_t0);
        r34_xn$createstroke$7Hrq = _r34_t0['create-stroke']['bind'](_r34_t0);
        r34_xn$setanchor$9Jrj = _r34_t0['set-anchor']['bind'](_r34_t0);
        _r34_t0['gizmo'] = r0_globalTransform;
        _r34_t0['set-width'](r0_WIDTH);
        r34_xn$setwidth$9Jrj(r0_WIDTH);
        r34_xn$assignunicode$7Hrq('G');
        r34_include(r0_capitalMarks);
        r34_outline = r34_xn$createstroke$7Hrq();
        r34_outline['start-from'](r0_RIGHTSB - r0_OXHOOK, r0_CAP - r0_HOOK)['curve-to'](r0_MIDDLE + r0_KAPPA_HOOK * (r0_MIDDLE - r0_para['sb']), r0_CAPO, r0_MIDDLE, r0_CAPO)['heads-to'](r0_LEFTWARD)['arc-hv-to'](r0_SB, r0_CAP - r0_SMOOTHA)['line-to'](r0_SB, r0_SMOOTHB)['arc-vh-to'](r0_MIDDLE, r0_O)['heads-to'](r0_RIGHTWARD)['arc-hv-to'](r0_RIGHTSB, r0_SMOOTHA)['line-to'](r0_RIGHTSB, r0_CAP / 2 + r0_STROKE / 2)['heads-to'](r0_UPWARD);
        r34_xn$putshapes$9Jrj(r34_outline['form-stroke'](r0_STROKE, 0));
        r34_bar = r34_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE, r0_CAP / 2 + r0_STROKE / 2)['line-to'](r0_RIGHTSB, r0_CAP / 2 + r0_STROKE / 2)['heads-to'](r0_RIGHTWARD);
        r34_xn$putshapes$9Jrj(r34_bar['form-stroke'](0, r0_STROKE));
        return void 0;
    });
    r0_xn$createglyph$7Hrq('O', function _r0_t19() {
        var r36_xn$setwidth$9Jrj, r36_xn$assignunicode$7Hrq, r36_xn$startfrom$1aao, r36_xn$lineto$5sIl, r36_xn$curveto$1aao, r36_xn$cubicto$1aao, r36_xn$putshapes$9Jrj, r36_xn$reverselast$3qIs, r36_include, r36_xn$createstroke$7Hrq, r36_xn$setanchor$9Jrj, r36_outline, _r36_t0;
        _r36_t0 = this;
        r36_xn$setwidth$9Jrj = _r36_t0['set-width']['bind'](_r36_t0);
        r36_xn$assignunicode$7Hrq = _r36_t0['assign-unicode']['bind'](_r36_t0);
        r36_xn$startfrom$1aao = _r36_t0['start-from']['bind'](_r36_t0);
        r36_xn$lineto$5sIl = _r36_t0['line-to']['bind'](_r36_t0);
        r36_xn$curveto$1aao = _r36_t0['curve-to']['bind'](_r36_t0);
        r36_xn$cubicto$1aao = _r36_t0['cubic-to']['bind'](_r36_t0);
        r36_xn$putshapes$9Jrj = _r36_t0['put-shapes']['bind'](_r36_t0);
        r36_xn$reverselast$3qIs = _r36_t0['reverse-last']['bind'](_r36_t0);
        r36_include = _r36_t0['include']['bind'](_r36_t0);
        r36_xn$createstroke$7Hrq = _r36_t0['create-stroke']['bind'](_r36_t0);
        r36_xn$setanchor$9Jrj = _r36_t0['set-anchor']['bind'](_r36_t0);
        _r36_t0['gizmo'] = r0_globalTransform;
        _r36_t0['set-width'](r0_WIDTH);
        r36_xn$setwidth$9Jrj(r0_WIDTH);
        r36_xn$assignunicode$7Hrq('O');
        r36_include(r0_capitalMarks);
        r36_outline = r36_xn$createstroke$7Hrq();
        r36_outline['start-from'](r0_MIDDLE, r0_CAPO)['heads-to'](r0_LEFTWARD)['arc-hv-to'](r0_SB, r0_CAP - r0_SMOOTHA)['line-to'](r0_SB, r0_SMOOTHB)['arc-vh-to'](r0_MIDDLE, r0_O)['heads-to'](r0_RIGHTWARD)['arc-hv-to'](r0_RIGHTSB, r0_SMOOTHA)['line-to'](r0_RIGHTSB, r0_CAP - r0_SMOOTHB)['arc-vh-to'](r0_MIDDLE, r0_CAPO)['heads-to'](r0_LEFTWARD);
        r36_xn$putshapes$9Jrj(r36_outline['form-stroke'](r0_STROKE, 0));
        return void 0;
    });
    r0_xn$createglyph$7Hrq('zero.slashed', function _r0_t20() {
        var r38_xn$setwidth$9Jrj, r38_xn$assignunicode$7Hrq, r38_xn$startfrom$1aao, r38_xn$lineto$5sIl, r38_xn$curveto$1aao, r38_xn$cubicto$1aao, r38_xn$putshapes$9Jrj, r38_xn$reverselast$3qIs, r38_include, r38_xn$createstroke$7Hrq, r38_xn$setanchor$9Jrj, r38_bar, _r38_t0;
        _r38_t0 = this;
        r38_xn$setwidth$9Jrj = _r38_t0['set-width']['bind'](_r38_t0);
        r38_xn$assignunicode$7Hrq = _r38_t0['assign-unicode']['bind'](_r38_t0);
        r38_xn$startfrom$1aao = _r38_t0['start-from']['bind'](_r38_t0);
        r38_xn$lineto$5sIl = _r38_t0['line-to']['bind'](_r38_t0);
        r38_xn$curveto$1aao = _r38_t0['curve-to']['bind'](_r38_t0);
        r38_xn$cubicto$1aao = _r38_t0['cubic-to']['bind'](_r38_t0);
        r38_xn$putshapes$9Jrj = _r38_t0['put-shapes']['bind'](_r38_t0);
        r38_xn$reverselast$3qIs = _r38_t0['reverse-last']['bind'](_r38_t0);
        r38_include = _r38_t0['include']['bind'](_r38_t0);
        r38_xn$createstroke$7Hrq = _r38_t0['create-stroke']['bind'](_r38_t0);
        r38_xn$setanchor$9Jrj = _r38_t0['set-anchor']['bind'](_r38_t0);
        _r38_t0['gizmo'] = r0_globalTransform;
        _r38_t0['set-width'](r0_WIDTH);
        r38_xn$setwidth$9Jrj(r0_WIDTH);
        r38_xn$putshapes$9Jrj(r0_glyphs['O']['contours']);
        r38_bar = r38_xn$createstroke$7Hrq()['start-from'](r0_SB + r0_STROKE / 2, r0_CAP * (1 - 0.65))['line-to'](r0_RIGHTSB - r0_STROKE / 2, r0_CAP * 0.65);
        r38_xn$putshapes$9Jrj(r38_bar['form-stroke'](r0_STROKE / 2, r0_STROKE / 2));
        return void 0;
    });
    r0_xn$createglyph$7Hrq('zero.unslashed', function _r0_t21() {
        var r40_xn$setwidth$9Jrj, r40_xn$assignunicode$7Hrq, r40_xn$startfrom$1aao, r40_xn$lineto$5sIl, r40_xn$curveto$1aao, r40_xn$cubicto$1aao, r40_xn$putshapes$9Jrj, r40_xn$reverselast$3qIs, r40_include, r40_xn$createstroke$7Hrq, r40_xn$setanchor$9Jrj, _r40_t0;
        _r40_t0 = this;
        r40_xn$setwidth$9Jrj = _r40_t0['set-width']['bind'](_r40_t0);
        r40_xn$assignunicode$7Hrq = _r40_t0['assign-unicode']['bind'](_r40_t0);
        r40_xn$startfrom$1aao = _r40_t0['start-from']['bind'](_r40_t0);
        r40_xn$lineto$5sIl = _r40_t0['line-to']['bind'](_r40_t0);
        r40_xn$curveto$1aao = _r40_t0['curve-to']['bind'](_r40_t0);
        r40_xn$cubicto$1aao = _r40_t0['cubic-to']['bind'](_r40_t0);
        r40_xn$putshapes$9Jrj = _r40_t0['put-shapes']['bind'](_r40_t0);
        r40_xn$reverselast$3qIs = _r40_t0['reverse-last']['bind'](_r40_t0);
        r40_include = _r40_t0['include']['bind'](_r40_t0);
        r40_xn$createstroke$7Hrq = _r40_t0['create-stroke']['bind'](_r40_t0);
        r40_xn$setanchor$9Jrj = _r40_t0['set-anchor']['bind'](_r40_t0);
        _r40_t0['gizmo'] = r0_globalTransform;
        _r40_t0['set-width'](r0_WIDTH);
        r40_include(r0_glyphs['O']);
        return void 0;
    });
    r0_xn$createglyph$7Hrq('zero.dotted', function _r0_t22() {
        var r42_xn$setwidth$9Jrj, r42_xn$assignunicode$7Hrq, r42_xn$startfrom$1aao, r42_xn$lineto$5sIl, r42_xn$curveto$1aao, r42_xn$cubicto$1aao, r42_xn$putshapes$9Jrj, r42_xn$reverselast$3qIs, r42_include, r42_xn$createstroke$7Hrq, r42_xn$setanchor$9Jrj, _r42_t0;
        _r42_t0 = this;
        r42_xn$setwidth$9Jrj = _r42_t0['set-width']['bind'](_r42_t0);
        r42_xn$assignunicode$7Hrq = _r42_t0['assign-unicode']['bind'](_r42_t0);
        r42_xn$startfrom$1aao = _r42_t0['start-from']['bind'](_r42_t0);
        r42_xn$lineto$5sIl = _r42_t0['line-to']['bind'](_r42_t0);
        r42_xn$curveto$1aao = _r42_t0['curve-to']['bind'](_r42_t0);
        r42_xn$cubicto$1aao = _r42_t0['cubic-to']['bind'](_r42_t0);
        r42_xn$putshapes$9Jrj = _r42_t0['put-shapes']['bind'](_r42_t0);
        r42_xn$reverselast$3qIs = _r42_t0['reverse-last']['bind'](_r42_t0);
        r42_include = _r42_t0['include']['bind'](_r42_t0);
        r42_xn$createstroke$7Hrq = _r42_t0['create-stroke']['bind'](_r42_t0);
        r42_xn$setanchor$9Jrj = _r42_t0['set-anchor']['bind'](_r42_t0);
        _r42_t0['gizmo'] = r0_globalTransform;
        _r42_t0['set-width'](r0_WIDTH);
        r42_include(r0_glyphs['O']);
        r42_xn$putshapes$9Jrj([r0_Ring(r0_CAPMIDDLE + r0_DOTRADIUS, r0_CAPMIDDLE - r0_DOTRADIUS, r0_MIDDLE + r0_DOTRADIUS, r0_MIDDLE - r0_DOTRADIUS)]);
        return void 0;
    });
    r0_xn$createglyph$7Hrq('zero', function _r0_t23() {
        var r44_xn$setwidth$9Jrj, r44_xn$assignunicode$7Hrq, r44_xn$startfrom$1aao, r44_xn$lineto$5sIl, r44_xn$curveto$1aao, r44_xn$cubicto$1aao, r44_xn$putshapes$9Jrj, r44_xn$reverselast$3qIs, r44_include, r44_xn$createstroke$7Hrq, r44_xn$setanchor$9Jrj, r44_otherwise, _r44_t0, _r44_t1, _r44_t2, _r44_t3, _r44_t4, _r44_t5, _r44_t6, _r44_t7;
        _r44_t1 = this;
        r44_xn$setwidth$9Jrj = _r44_t1['set-width']['bind'](_r44_t1);
        r44_xn$assignunicode$7Hrq = _r44_t1['assign-unicode']['bind'](_r44_t1);
        r44_xn$startfrom$1aao = _r44_t1['start-from']['bind'](_r44_t1);
        r44_xn$lineto$5sIl = _r44_t1['line-to']['bind'](_r44_t1);
        r44_xn$curveto$1aao = _r44_t1['curve-to']['bind'](_r44_t1);
        r44_xn$cubicto$1aao = _r44_t1['cubic-to']['bind'](_r44_t1);
        r44_xn$putshapes$9Jrj = _r44_t1['put-shapes']['bind'](_r44_t1);
        r44_xn$reverselast$3qIs = _r44_t1['reverse-last']['bind'](_r44_t1);
        r44_include = _r44_t1['include']['bind'](_r44_t1);
        r44_xn$createstroke$7Hrq = _r44_t1['create-stroke']['bind'](_r44_t1);
        r44_xn$setanchor$9Jrj = _r44_t1['set-anchor']['bind'](_r44_t1);
        _r44_t1['gizmo'] = r0_globalTransform;
        _r44_t1['set-width'](r0_WIDTH);
        r44_xn$setwidth$9Jrj(r0_WIDTH);
        r44_xn$assignunicode$7Hrq('0');
        _r44_t2 = r44_include;
        _r44_t3 = r0_glyphs;
        _r44_t0 = r0_variantSelector['zero'];
        if ('slashed' === _r44_t0) {
            _r44_t4 = 'zero.slashed';
        } else {
            if ('dotted' === _r44_t0) {
                _r44_t5 = 'zero.dotted';
            } else {
                if ('unslahsed' === _r44_t0) {
                    _r44_t6 = 'zero.unslashed';
                } else {
                    r44_otherwise = _r44_t0;
                    _r44_t6 = 'zero.slashed';
                }
                _r44_t5 = _r44_t6;
            }
            _r44_t4 = _r44_t5;
        }
        _r44_t7 = _r44_t3[_r44_t4];
        _r44_t2(_r44_t7);
        return void 0;
    });
    r0_xn$createglyph$7Hrq('Q', function _r0_t24() {
        var r46_xn$setwidth$9Jrj, r46_xn$assignunicode$7Hrq, r46_xn$startfrom$1aao, r46_xn$lineto$5sIl, r46_xn$curveto$1aao, r46_xn$cubicto$1aao, r46_xn$putshapes$9Jrj, r46_xn$reverselast$3qIs, r46_include, r46_xn$createstroke$7Hrq, r46_xn$setanchor$9Jrj, _r46_t0;
        _r46_t0 = this;
        r46_xn$setwidth$9Jrj = _r46_t0['set-width']['bind'](_r46_t0);
        r46_xn$assignunicode$7Hrq = _r46_t0['assign-unicode']['bind'](_r46_t0);
        r46_xn$startfrom$1aao = _r46_t0['start-from']['bind'](_r46_t0);
        r46_xn$lineto$5sIl = _r46_t0['line-to']['bind'](_r46_t0);
        r46_xn$curveto$1aao = _r46_t0['curve-to']['bind'](_r46_t0);
        r46_xn$cubicto$1aao = _r46_t0['cubic-to']['bind'](_r46_t0);
        r46_xn$putshapes$9Jrj = _r46_t0['put-shapes']['bind'](_r46_t0);
        r46_xn$reverselast$3qIs = _r46_t0['reverse-last']['bind'](_r46_t0);
        r46_include = _r46_t0['include']['bind'](_r46_t0);
        r46_xn$createstroke$7Hrq = _r46_t0['create-stroke']['bind'](_r46_t0);
        r46_xn$setanchor$9Jrj = _r46_t0['set-anchor']['bind'](_r46_t0);
        _r46_t0['gizmo'] = r0_globalTransform;
        _r46_t0['set-width'](r0_WIDTH);
        r46_xn$setwidth$9Jrj(r0_WIDTH);
        r46_xn$assignunicode$7Hrq('Q');
        r46_include(r0_glyphs['O'], true);
        r46_xn$startfrom$1aao(r0_MIDDLE, 0);
        r46_xn$lineto$5sIl(r0_MIDDLE + r0_STROKE / 2, -r0_CAP * 0.2);
        r46_xn$lineto$5sIl(r0_MIDDLE + r0_STROKE / 2 + r0_STROKE, -r0_CAP * 0.2);
        r46_xn$lineto$5sIl(r0_MIDDLE + r0_STROKE, 0);
        r46_xn$lineto$5sIl(r0_MIDDLE + r0_STROKE * (1 - 0.5 / 3), r0_STROKE * 0.5);
        r46_xn$reverselast$3qIs();
        return void 0;
    });
    r0_xn$createglyph$7Hrq('U', function _r0_t25() {
        var r48_xn$setwidth$9Jrj, r48_xn$assignunicode$7Hrq, r48_xn$startfrom$1aao, r48_xn$lineto$5sIl, r48_xn$curveto$1aao, r48_xn$cubicto$1aao, r48_xn$putshapes$9Jrj, r48_xn$reverselast$3qIs, r48_include, r48_xn$createstroke$7Hrq, r48_xn$setanchor$9Jrj, r48_outline, _r48_t0;
        _r48_t0 = this;
        r48_xn$setwidth$9Jrj = _r48_t0['set-width']['bind'](_r48_t0);
        r48_xn$assignunicode$7Hrq = _r48_t0['assign-unicode']['bind'](_r48_t0);
        r48_xn$startfrom$1aao = _r48_t0['start-from']['bind'](_r48_t0);
        r48_xn$lineto$5sIl = _r48_t0['line-to']['bind'](_r48_t0);
        r48_xn$curveto$1aao = _r48_t0['curve-to']['bind'](_r48_t0);
        r48_xn$cubicto$1aao = _r48_t0['cubic-to']['bind'](_r48_t0);
        r48_xn$putshapes$9Jrj = _r48_t0['put-shapes']['bind'](_r48_t0);
        r48_xn$reverselast$3qIs = _r48_t0['reverse-last']['bind'](_r48_t0);
        r48_include = _r48_t0['include']['bind'](_r48_t0);
        r48_xn$createstroke$7Hrq = _r48_t0['create-stroke']['bind'](_r48_t0);
        r48_xn$setanchor$9Jrj = _r48_t0['set-anchor']['bind'](_r48_t0);
        _r48_t0['gizmo'] = r0_globalTransform;
        _r48_t0['set-width'](r0_WIDTH);
        r48_xn$setwidth$9Jrj(r0_WIDTH);
        r48_xn$assignunicode$7Hrq('U');
        r48_include(r0_capitalMarks);
        r48_outline = r48_xn$createstroke$7Hrq();
        r48_outline['start-from'](r0_SB, r0_CAP)['heads-to'](r0_DOWNWARD)['line-to'](r0_SB, r0_SMOOTHB)['arc-vh-to'](r0_MIDDLE, r0_O)['heads-to'](r0_RIGHTWARD)['arc-hv-to'](r0_RIGHTSB, r0_SMOOTHA)['line-to'](r0_RIGHTSB, r0_CAP)['heads-to'](r0_UPWARD);
        r48_xn$putshapes$9Jrj(r48_outline['form-stroke'](r0_STROKE, 0));
        return void 0;
    });
    r0_xn$createglyph$7Hrq('F', function _r0_t26() {
        var r50_xn$setwidth$9Jrj, r50_xn$assignunicode$7Hrq, r50_xn$startfrom$1aao, r50_xn$lineto$5sIl, r50_xn$curveto$1aao, r50_xn$cubicto$1aao, r50_xn$putshapes$9Jrj, r50_xn$reverselast$3qIs, r50_include, r50_xn$createstroke$7Hrq, r50_xn$setanchor$9Jrj, _r50_t0;
        _r50_t0 = this;
        r50_xn$setwidth$9Jrj = _r50_t0['set-width']['bind'](_r50_t0);
        r50_xn$assignunicode$7Hrq = _r50_t0['assign-unicode']['bind'](_r50_t0);
        r50_xn$startfrom$1aao = _r50_t0['start-from']['bind'](_r50_t0);
        r50_xn$lineto$5sIl = _r50_t0['line-to']['bind'](_r50_t0);
        r50_xn$curveto$1aao = _r50_t0['curve-to']['bind'](_r50_t0);
        r50_xn$cubicto$1aao = _r50_t0['cubic-to']['bind'](_r50_t0);
        r50_xn$putshapes$9Jrj = _r50_t0['put-shapes']['bind'](_r50_t0);
        r50_xn$reverselast$3qIs = _r50_t0['reverse-last']['bind'](_r50_t0);
        r50_include = _r50_t0['include']['bind'](_r50_t0);
        r50_xn$createstroke$7Hrq = _r50_t0['create-stroke']['bind'](_r50_t0);
        r50_xn$setanchor$9Jrj = _r50_t0['set-anchor']['bind'](_r50_t0);
        _r50_t0['gizmo'] = r0_globalTransform;
        _r50_t0['set-width'](r0_WIDTH);
        r50_xn$setwidth$9Jrj(r0_WIDTH);
        r50_xn$assignunicode$7Hrq('F');
        r50_include(r0_capitalMarks);
        r50_xn$putshapes$9Jrj(r50_xn$createstroke$7Hrq()['start-from'](r0_SB * 1.5, 0)['heads-to'](r0_UPWARD)['set-width'](0, r0_STROKE)['line-to'](r0_SB * 1.5, r0_CAP)['heads-to'](r0_UPWARD)['form-stroke']());
        r50_xn$putshapes$9Jrj(r50_xn$createstroke$7Hrq()['start-from'](r0_SB * 1.5, r0_CAP)['set-width'](0, r0_STROKE)['heads-to'](r0_RIGHTWARD)['line-to'](r0_RIGHTSB, r0_CAP)['heads-to'](r0_RIGHTWARD)['form-stroke']());
        r50_xn$putshapes$9Jrj(r50_xn$createstroke$7Hrq()['start-from'](r0_SB * 1.5, r0_CAPMIDDLE)['set-width'](r0_HALFSTROKE, r0_HALFSTROKE)['heads-to'](r0_RIGHTWARD)['line-to'](r0_RIGHTSB - r0_HALFSTROKE, r0_CAPMIDDLE)['heads-to'](r0_RIGHTWARD)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('E', function _r0_t27() {
        var r52_xn$setwidth$9Jrj, r52_xn$assignunicode$7Hrq, r52_xn$startfrom$1aao, r52_xn$lineto$5sIl, r52_xn$curveto$1aao, r52_xn$cubicto$1aao, r52_xn$putshapes$9Jrj, r52_xn$reverselast$3qIs, r52_include, r52_xn$createstroke$7Hrq, r52_xn$setanchor$9Jrj, _r52_t0;
        _r52_t0 = this;
        r52_xn$setwidth$9Jrj = _r52_t0['set-width']['bind'](_r52_t0);
        r52_xn$assignunicode$7Hrq = _r52_t0['assign-unicode']['bind'](_r52_t0);
        r52_xn$startfrom$1aao = _r52_t0['start-from']['bind'](_r52_t0);
        r52_xn$lineto$5sIl = _r52_t0['line-to']['bind'](_r52_t0);
        r52_xn$curveto$1aao = _r52_t0['curve-to']['bind'](_r52_t0);
        r52_xn$cubicto$1aao = _r52_t0['cubic-to']['bind'](_r52_t0);
        r52_xn$putshapes$9Jrj = _r52_t0['put-shapes']['bind'](_r52_t0);
        r52_xn$reverselast$3qIs = _r52_t0['reverse-last']['bind'](_r52_t0);
        r52_include = _r52_t0['include']['bind'](_r52_t0);
        r52_xn$createstroke$7Hrq = _r52_t0['create-stroke']['bind'](_r52_t0);
        r52_xn$setanchor$9Jrj = _r52_t0['set-anchor']['bind'](_r52_t0);
        _r52_t0['gizmo'] = r0_globalTransform;
        _r52_t0['set-width'](r0_WIDTH);
        r52_xn$setwidth$9Jrj(r0_WIDTH);
        r52_xn$assignunicode$7Hrq('E');
        r52_include(r0_glyphs['F'], true);
        r52_xn$putshapes$9Jrj(r52_xn$createstroke$7Hrq()['start-from'](r0_SB * 1.5, 0)['set-width'](r0_STROKE, 0)['heads-to'](r0_RIGHTWARD)['line-to'](r0_RIGHTSB, 0)['heads-to'](r0_RIGHTWARD)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('H', function _r0_t28() {
        var r54_xn$setwidth$9Jrj, r54_xn$assignunicode$7Hrq, r54_xn$startfrom$1aao, r54_xn$lineto$5sIl, r54_xn$curveto$1aao, r54_xn$cubicto$1aao, r54_xn$putshapes$9Jrj, r54_xn$reverselast$3qIs, r54_include, r54_xn$createstroke$7Hrq, r54_xn$setanchor$9Jrj, _r54_t0;
        _r54_t0 = this;
        r54_xn$setwidth$9Jrj = _r54_t0['set-width']['bind'](_r54_t0);
        r54_xn$assignunicode$7Hrq = _r54_t0['assign-unicode']['bind'](_r54_t0);
        r54_xn$startfrom$1aao = _r54_t0['start-from']['bind'](_r54_t0);
        r54_xn$lineto$5sIl = _r54_t0['line-to']['bind'](_r54_t0);
        r54_xn$curveto$1aao = _r54_t0['curve-to']['bind'](_r54_t0);
        r54_xn$cubicto$1aao = _r54_t0['cubic-to']['bind'](_r54_t0);
        r54_xn$putshapes$9Jrj = _r54_t0['put-shapes']['bind'](_r54_t0);
        r54_xn$reverselast$3qIs = _r54_t0['reverse-last']['bind'](_r54_t0);
        r54_include = _r54_t0['include']['bind'](_r54_t0);
        r54_xn$createstroke$7Hrq = _r54_t0['create-stroke']['bind'](_r54_t0);
        r54_xn$setanchor$9Jrj = _r54_t0['set-anchor']['bind'](_r54_t0);
        _r54_t0['gizmo'] = r0_globalTransform;
        _r54_t0['set-width'](r0_WIDTH);
        r54_xn$setwidth$9Jrj(r0_WIDTH);
        r54_xn$assignunicode$7Hrq('H');
        r54_include(r0_capitalMarks);
        r54_xn$putshapes$9Jrj(r54_xn$createstroke$7Hrq()['start-from'](r0_SB, 0)['heads-to'](r0_UPWARD)['set-width'](0, r0_STROKE)['line-to'](r0_SB, r0_CAP)['heads-to'](r0_UPWARD)['form-stroke']());
        r54_xn$putshapes$9Jrj(r54_xn$createstroke$7Hrq()['start-from'](r0_RIGHTSB, 0)['heads-to'](r0_UPWARD)['set-width'](r0_STROKE, 0)['line-to'](r0_RIGHTSB, r0_CAP)['heads-to'](r0_UPWARD)['form-stroke']());
        r54_xn$putshapes$9Jrj(r54_xn$createstroke$7Hrq()['start-from'](r0_SB, r0_CAP / 2)['set-width'](r0_HALFSTROKE, r0_HALFSTROKE)['heads-to'](r0_RIGHTWARD)['line-to'](r0_RIGHTSB, r0_CAP / 2)['heads-to'](r0_RIGHTWARD)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('L', function _r0_t29() {
        var r56_xn$setwidth$9Jrj, r56_xn$assignunicode$7Hrq, r56_xn$startfrom$1aao, r56_xn$lineto$5sIl, r56_xn$curveto$1aao, r56_xn$cubicto$1aao, r56_xn$putshapes$9Jrj, r56_xn$reverselast$3qIs, r56_include, r56_xn$createstroke$7Hrq, r56_xn$setanchor$9Jrj, _r56_t0;
        _r56_t0 = this;
        r56_xn$setwidth$9Jrj = _r56_t0['set-width']['bind'](_r56_t0);
        r56_xn$assignunicode$7Hrq = _r56_t0['assign-unicode']['bind'](_r56_t0);
        r56_xn$startfrom$1aao = _r56_t0['start-from']['bind'](_r56_t0);
        r56_xn$lineto$5sIl = _r56_t0['line-to']['bind'](_r56_t0);
        r56_xn$curveto$1aao = _r56_t0['curve-to']['bind'](_r56_t0);
        r56_xn$cubicto$1aao = _r56_t0['cubic-to']['bind'](_r56_t0);
        r56_xn$putshapes$9Jrj = _r56_t0['put-shapes']['bind'](_r56_t0);
        r56_xn$reverselast$3qIs = _r56_t0['reverse-last']['bind'](_r56_t0);
        r56_include = _r56_t0['include']['bind'](_r56_t0);
        r56_xn$createstroke$7Hrq = _r56_t0['create-stroke']['bind'](_r56_t0);
        r56_xn$setanchor$9Jrj = _r56_t0['set-anchor']['bind'](_r56_t0);
        _r56_t0['gizmo'] = r0_globalTransform;
        _r56_t0['set-width'](r0_WIDTH);
        r56_xn$setwidth$9Jrj(r0_WIDTH);
        r56_xn$assignunicode$7Hrq('L');
        r56_include(r0_capitalMarks);
        r56_xn$putshapes$9Jrj(r56_xn$createstroke$7Hrq()['start-from'](r0_SB * 1.5, r0_CAP)['set-width'](r0_STROKE, 0)['heads-to'](r0_DOWNWARD)['line-to'](r0_SB * 1.5, 0)['heads-to'](r0_DOWNWARD)['form-stroke']());
        r56_xn$putshapes$9Jrj(r56_xn$createstroke$7Hrq()['start-from'](r0_SB * 1.5, 0)['set-width'](r0_STROKE, 0)['heads-to'](r0_RIGHTWARD)['line-to'](r0_RIGHTSB, 0)['heads-to'](r0_RIGHTWARD)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('dotlessI.straight', function _r0_t30() {
        var r58_xn$setwidth$9Jrj, r58_xn$assignunicode$7Hrq, r58_xn$startfrom$1aao, r58_xn$lineto$5sIl, r58_xn$curveto$1aao, r58_xn$cubicto$1aao, r58_xn$putshapes$9Jrj, r58_xn$reverselast$3qIs, r58_include, r58_xn$createstroke$7Hrq, r58_xn$setanchor$9Jrj, _r58_t0;
        _r58_t0 = this;
        r58_xn$setwidth$9Jrj = _r58_t0['set-width']['bind'](_r58_t0);
        r58_xn$assignunicode$7Hrq = _r58_t0['assign-unicode']['bind'](_r58_t0);
        r58_xn$startfrom$1aao = _r58_t0['start-from']['bind'](_r58_t0);
        r58_xn$lineto$5sIl = _r58_t0['line-to']['bind'](_r58_t0);
        r58_xn$curveto$1aao = _r58_t0['curve-to']['bind'](_r58_t0);
        r58_xn$cubicto$1aao = _r58_t0['cubic-to']['bind'](_r58_t0);
        r58_xn$putshapes$9Jrj = _r58_t0['put-shapes']['bind'](_r58_t0);
        r58_xn$reverselast$3qIs = _r58_t0['reverse-last']['bind'](_r58_t0);
        r58_include = _r58_t0['include']['bind'](_r58_t0);
        r58_xn$createstroke$7Hrq = _r58_t0['create-stroke']['bind'](_r58_t0);
        r58_xn$setanchor$9Jrj = _r58_t0['set-anchor']['bind'](_r58_t0);
        _r58_t0['gizmo'] = r0_globalTransform;
        _r58_t0['set-width'](r0_WIDTH);
        r58_xn$putshapes$9Jrj(r58_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE, 0)['heads-to'](r0_UPWARD)['set-width'](r0_HALFSTROKE, r0_HALFSTROKE)['line-to'](r0_MIDDLE, r0_CAP)['heads-to'](r0_UPWARD)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('dotlessI.symmetric', function _r0_t31() {
        var r60_xn$setwidth$9Jrj, r60_xn$assignunicode$7Hrq, r60_xn$startfrom$1aao, r60_xn$lineto$5sIl, r60_xn$curveto$1aao, r60_xn$cubicto$1aao, r60_xn$putshapes$9Jrj, r60_xn$reverselast$3qIs, r60_include, r60_xn$createstroke$7Hrq, r60_xn$setanchor$9Jrj, _r60_t0;
        _r60_t0 = this;
        r60_xn$setwidth$9Jrj = _r60_t0['set-width']['bind'](_r60_t0);
        r60_xn$assignunicode$7Hrq = _r60_t0['assign-unicode']['bind'](_r60_t0);
        r60_xn$startfrom$1aao = _r60_t0['start-from']['bind'](_r60_t0);
        r60_xn$lineto$5sIl = _r60_t0['line-to']['bind'](_r60_t0);
        r60_xn$curveto$1aao = _r60_t0['curve-to']['bind'](_r60_t0);
        r60_xn$cubicto$1aao = _r60_t0['cubic-to']['bind'](_r60_t0);
        r60_xn$putshapes$9Jrj = _r60_t0['put-shapes']['bind'](_r60_t0);
        r60_xn$reverselast$3qIs = _r60_t0['reverse-last']['bind'](_r60_t0);
        r60_include = _r60_t0['include']['bind'](_r60_t0);
        r60_xn$createstroke$7Hrq = _r60_t0['create-stroke']['bind'](_r60_t0);
        r60_xn$setanchor$9Jrj = _r60_t0['set-anchor']['bind'](_r60_t0);
        _r60_t0['gizmo'] = r0_globalTransform;
        _r60_t0['set-width'](r0_WIDTH);
        r60_include(r0_glyphs['dotlessI.straight']);
        r60_xn$putshapes$9Jrj(r60_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE - r0_WIDTH * 0.26 - r0_STROKE * r0_globalTransform['yx'], r0_CAP)['set-width'](0, r0_STROKE)['line-to'](r0_MIDDLE + r0_WIDTH * 0.26 - r0_STROKE * r0_globalTransform['yx'], r0_CAP)['form-stroke']());
        r60_xn$putshapes$9Jrj(r60_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE - r0_WIDTH * 0.26 + r0_STROKE * r0_globalTransform['yx'], 0)['set-width'](r0_STROKE, 0)['line-to'](r0_MIDDLE + r0_WIDTH * 0.26 + r0_STROKE * r0_globalTransform['yx'], 0)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('I', function _r0_t32() {
        var r62_xn$setwidth$9Jrj, r62_xn$assignunicode$7Hrq, r62_xn$startfrom$1aao, r62_xn$lineto$5sIl, r62_xn$curveto$1aao, r62_xn$cubicto$1aao, r62_xn$putshapes$9Jrj, r62_xn$reverselast$3qIs, r62_include, r62_xn$createstroke$7Hrq, r62_xn$setanchor$9Jrj, _r62_t0;
        _r62_t0 = this;
        r62_xn$setwidth$9Jrj = _r62_t0['set-width']['bind'](_r62_t0);
        r62_xn$assignunicode$7Hrq = _r62_t0['assign-unicode']['bind'](_r62_t0);
        r62_xn$startfrom$1aao = _r62_t0['start-from']['bind'](_r62_t0);
        r62_xn$lineto$5sIl = _r62_t0['line-to']['bind'](_r62_t0);
        r62_xn$curveto$1aao = _r62_t0['curve-to']['bind'](_r62_t0);
        r62_xn$cubicto$1aao = _r62_t0['cubic-to']['bind'](_r62_t0);
        r62_xn$putshapes$9Jrj = _r62_t0['put-shapes']['bind'](_r62_t0);
        r62_xn$reverselast$3qIs = _r62_t0['reverse-last']['bind'](_r62_t0);
        r62_include = _r62_t0['include']['bind'](_r62_t0);
        r62_xn$createstroke$7Hrq = _r62_t0['create-stroke']['bind'](_r62_t0);
        r62_xn$setanchor$9Jrj = _r62_t0['set-anchor']['bind'](_r62_t0);
        _r62_t0['gizmo'] = r0_globalTransform;
        _r62_t0['set-width'](r0_WIDTH);
        r62_xn$setwidth$9Jrj(r0_WIDTH);
        r62_xn$assignunicode$7Hrq('I');
        r62_include(r0_capitalMarks);
        r62_include(r0_glyphs['dotlessI.symmetric']);
        return void 0;
    });
    r0_xn$createglyph$7Hrq('J.straight', function _r0_t33() {
        var r64_xn$setwidth$9Jrj, r64_xn$assignunicode$7Hrq, r64_xn$startfrom$1aao, r64_xn$lineto$5sIl, r64_xn$curveto$1aao, r64_xn$cubicto$1aao, r64_xn$putshapes$9Jrj, r64_xn$reverselast$3qIs, r64_include, r64_xn$createstroke$7Hrq, r64_xn$setanchor$9Jrj, r64_slope, r64_expand, r64_coexpand, r64_kappa, r64_smooth, _r64_t0;
        _r64_t0 = this;
        r64_xn$setwidth$9Jrj = _r64_t0['set-width']['bind'](_r64_t0);
        r64_xn$assignunicode$7Hrq = _r64_t0['assign-unicode']['bind'](_r64_t0);
        r64_xn$startfrom$1aao = _r64_t0['start-from']['bind'](_r64_t0);
        r64_xn$lineto$5sIl = _r64_t0['line-to']['bind'](_r64_t0);
        r64_xn$curveto$1aao = _r64_t0['curve-to']['bind'](_r64_t0);
        r64_xn$cubicto$1aao = _r64_t0['cubic-to']['bind'](_r64_t0);
        r64_xn$putshapes$9Jrj = _r64_t0['put-shapes']['bind'](_r64_t0);
        r64_xn$reverselast$3qIs = _r64_t0['reverse-last']['bind'](_r64_t0);
        r64_include = _r64_t0['include']['bind'](_r64_t0);
        r64_xn$createstroke$7Hrq = _r64_t0['create-stroke']['bind'](_r64_t0);
        r64_xn$setanchor$9Jrj = _r64_t0['set-anchor']['bind'](_r64_t0);
        _r64_t0['gizmo'] = r0_globalTransform;
        _r64_t0['set-width'](r0_WIDTH);
        r64_xn$setwidth$9Jrj(r0_WIDTH);
        r64_include(r0_capitalMarks);
        r64_slope = r0_STROKE * 0.00092;
        r64_expand = 0.35;
        r64_coexpand = (1 - r64_expand) / 2;
        r64_kappa = r0_KAPPA_HOOK;
        r64_smooth = r0_HOOK + 0.75 * r0_STROKE;
        r64_xn$putshapes$9Jrj(r64_xn$createstroke$7Hrq()['start-from'](r0_RIGHTSB, r0_CAP)['set-width'](0, r0_STROKE)['heads-to'](r0_DOWNWARD)['line-to'](r0_RIGHTSB, r64_smooth)['arc-vh-to'](r0_MIDDLE - r0_SB * 0.25, r0_O)['heads-to'](r0_LEFTWARD)['curve-to'](r0_MIDDLE - r64_kappa * (r0_MIDDLE - r0_SB) - r0_SB * 0.5, r0_O, 0.5 * r0_SB + r0_OXHOOK, r0_HOOK)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('J.serifed', function _r0_t34() {
        var r66_xn$setwidth$9Jrj, r66_xn$assignunicode$7Hrq, r66_xn$startfrom$1aao, r66_xn$lineto$5sIl, r66_xn$curveto$1aao, r66_xn$cubicto$1aao, r66_xn$putshapes$9Jrj, r66_xn$reverselast$3qIs, r66_include, r66_xn$createstroke$7Hrq, r66_xn$setanchor$9Jrj, _r66_t0;
        _r66_t0 = this;
        r66_xn$setwidth$9Jrj = _r66_t0['set-width']['bind'](_r66_t0);
        r66_xn$assignunicode$7Hrq = _r66_t0['assign-unicode']['bind'](_r66_t0);
        r66_xn$startfrom$1aao = _r66_t0['start-from']['bind'](_r66_t0);
        r66_xn$lineto$5sIl = _r66_t0['line-to']['bind'](_r66_t0);
        r66_xn$curveto$1aao = _r66_t0['curve-to']['bind'](_r66_t0);
        r66_xn$cubicto$1aao = _r66_t0['cubic-to']['bind'](_r66_t0);
        r66_xn$putshapes$9Jrj = _r66_t0['put-shapes']['bind'](_r66_t0);
        r66_xn$reverselast$3qIs = _r66_t0['reverse-last']['bind'](_r66_t0);
        r66_include = _r66_t0['include']['bind'](_r66_t0);
        r66_xn$createstroke$7Hrq = _r66_t0['create-stroke']['bind'](_r66_t0);
        r66_xn$setanchor$9Jrj = _r66_t0['set-anchor']['bind'](_r66_t0);
        _r66_t0['gizmo'] = r0_globalTransform;
        _r66_t0['set-width'](r0_WIDTH);
        r66_xn$setwidth$9Jrj(r0_WIDTH);
        r66_xn$assignunicode$7Hrq('J');
        r66_include(r0_glyphs['J.straight'], true);
        r66_xn$putshapes$9Jrj(r0_leftwardTopSerif(r0_RIGHTSB - r0_HALFSTROKE, r0_CAP, r0_LONGSERIF));
        return void 0;
    });
    r0_xn$createglyph$7Hrq('N', function _r0_t35() {
        var r68_xn$setwidth$9Jrj, r68_xn$assignunicode$7Hrq, r68_xn$startfrom$1aao, r68_xn$lineto$5sIl, r68_xn$curveto$1aao, r68_xn$cubicto$1aao, r68_xn$putshapes$9Jrj, r68_xn$reverselast$3qIs, r68_include, r68_xn$createstroke$7Hrq, r68_xn$setanchor$9Jrj, r68_topstroke, r68_halftopstroke, _r68_t0;
        _r68_t0 = this;
        r68_xn$setwidth$9Jrj = _r68_t0['set-width']['bind'](_r68_t0);
        r68_xn$assignunicode$7Hrq = _r68_t0['assign-unicode']['bind'](_r68_t0);
        r68_xn$startfrom$1aao = _r68_t0['start-from']['bind'](_r68_t0);
        r68_xn$lineto$5sIl = _r68_t0['line-to']['bind'](_r68_t0);
        r68_xn$curveto$1aao = _r68_t0['curve-to']['bind'](_r68_t0);
        r68_xn$cubicto$1aao = _r68_t0['cubic-to']['bind'](_r68_t0);
        r68_xn$putshapes$9Jrj = _r68_t0['put-shapes']['bind'](_r68_t0);
        r68_xn$reverselast$3qIs = _r68_t0['reverse-last']['bind'](_r68_t0);
        r68_include = _r68_t0['include']['bind'](_r68_t0);
        r68_xn$createstroke$7Hrq = _r68_t0['create-stroke']['bind'](_r68_t0);
        r68_xn$setanchor$9Jrj = _r68_t0['set-anchor']['bind'](_r68_t0);
        _r68_t0['gizmo'] = r0_globalTransform;
        _r68_t0['set-width'](r0_WIDTH);
        r68_xn$setwidth$9Jrj(r0_WIDTH);
        r68_xn$assignunicode$7Hrq('N');
        r68_include(r0_capitalMarks);
        r68_topstroke = Math['min'](r0_STROKE, (r0_WIDTH - r0_SB * 2) * 0.24);
        r68_halftopstroke = r68_topstroke / 2;
        r68_xn$putshapes$9Jrj(r68_xn$createstroke$7Hrq()['start-from'](r0_SB, 0)['heads-to'](r0_UPWARD)['set-width'](0, r0_STROKE)['line-to'](r0_SB, r0_CAP * 0.4)['heads-to'](r0_UPWARD)['line-to'](r0_SB, r0_CAP)['heads-to'](r0_UPWARD)['set-width'](0, r68_topstroke)['form-stroke']());
        r68_xn$putshapes$9Jrj(r68_xn$createstroke$7Hrq()['start-from'](r0_RIGHTSB, 0)['heads-to'](r0_UPWARD)['set-width'](r68_topstroke, 0)['line-to'](r0_RIGHTSB, r0_CAP * 0.6)['heads-to'](r0_UPWARD)['set-width'](r0_STROKE, 0)['line-to'](r0_RIGHTSB, r0_CAP)['heads-to'](r0_UPWARD)['form-stroke']());
        r68_xn$putshapes$9Jrj(r68_xn$createstroke$7Hrq()['start-from'](r0_SB + r68_halftopstroke, r0_CAP)['heads-to'](r0_DOWNWARD)['set-width'](r68_topstroke, 0)['line-to'](r0_RIGHTSB - r68_topstroke - r68_halftopstroke, 0)['heads-to'](r0_DOWNWARD)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('M', function _r0_t36() {
        var r70_xn$setwidth$9Jrj, r70_xn$assignunicode$7Hrq, r70_xn$startfrom$1aao, r70_xn$lineto$5sIl, r70_xn$curveto$1aao, r70_xn$cubicto$1aao, r70_xn$putshapes$9Jrj, r70_xn$reverselast$3qIs, r70_include, r70_xn$createstroke$7Hrq, r70_xn$setanchor$9Jrj, r70_topstroke, r70_halftopstroke, _r70_t0;
        _r70_t0 = this;
        r70_xn$setwidth$9Jrj = _r70_t0['set-width']['bind'](_r70_t0);
        r70_xn$assignunicode$7Hrq = _r70_t0['assign-unicode']['bind'](_r70_t0);
        r70_xn$startfrom$1aao = _r70_t0['start-from']['bind'](_r70_t0);
        r70_xn$lineto$5sIl = _r70_t0['line-to']['bind'](_r70_t0);
        r70_xn$curveto$1aao = _r70_t0['curve-to']['bind'](_r70_t0);
        r70_xn$cubicto$1aao = _r70_t0['cubic-to']['bind'](_r70_t0);
        r70_xn$putshapes$9Jrj = _r70_t0['put-shapes']['bind'](_r70_t0);
        r70_xn$reverselast$3qIs = _r70_t0['reverse-last']['bind'](_r70_t0);
        r70_include = _r70_t0['include']['bind'](_r70_t0);
        r70_xn$createstroke$7Hrq = _r70_t0['create-stroke']['bind'](_r70_t0);
        r70_xn$setanchor$9Jrj = _r70_t0['set-anchor']['bind'](_r70_t0);
        _r70_t0['gizmo'] = r0_globalTransform;
        _r70_t0['set-width'](r0_WIDTH);
        r70_xn$setwidth$9Jrj(r0_WIDTH);
        r70_xn$assignunicode$7Hrq('M');
        r70_include(r0_capitalMarks);
        r70_topstroke = Math['min'](r0_STROKE, (r0_WIDTH - r0_SB * 2) * 0.175);
        r70_halftopstroke = r70_topstroke / 2;
        r70_xn$putshapes$9Jrj(r70_xn$createstroke$7Hrq()['start-from'](r0_SB, 0)['heads-to'](r0_UPWARD)['set-width'](0, r0_STROKE)['line-to'](r0_SB, r0_CAP * 0.2)['heads-to'](r0_UPWARD)['line-to'](r0_SB, r0_CAP)['heads-to'](r0_UPWARD)['set-width'](0, r70_topstroke)['form-stroke']());
        r70_xn$putshapes$9Jrj(r70_xn$createstroke$7Hrq()['start-from'](r0_RIGHTSB, 0)['heads-to'](r0_UPWARD)['set-width'](r0_STROKE, 0)['line-to'](r0_RIGHTSB, r0_CAP * 0.2)['heads-to'](r0_UPWARD)['line-to'](r0_RIGHTSB, r0_CAP)['heads-to'](r0_UPWARD)['set-width'](r70_topstroke, 0)['form-stroke']());
        r70_xn$putshapes$9Jrj(r70_xn$createstroke$7Hrq()['start-from'](r0_SB + r70_halftopstroke, r0_CAP)['heads-to'](r0_DOWNWARD)['set-width'](r70_topstroke, 0)['line-to'](r0_MIDDLE - r70_halftopstroke, r0_CAP * 0.3)['heads-to'](r0_DOWNWARD)['form-stroke']());
        r70_xn$putshapes$9Jrj(r70_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE + r70_halftopstroke, r0_CAP * 0.3)['heads-to'](r0_UPWARD)['set-width'](r70_topstroke, 0)['line-to'](r0_RIGHTSB - r70_halftopstroke, r0_CAP)['heads-to'](r0_UPWARD)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('S', function _r0_t37() {
        var r72_xn$setwidth$9Jrj, r72_xn$assignunicode$7Hrq, r72_xn$startfrom$1aao, r72_xn$lineto$5sIl, r72_xn$curveto$1aao, r72_xn$cubicto$1aao, r72_xn$putshapes$9Jrj, r72_xn$reverselast$3qIs, r72_include, r72_xn$createstroke$7Hrq, r72_xn$setanchor$9Jrj, r72_slope, r72_expand, r72_coexpand, r72_ssmootha, r72_bowltop, r72_strokemiddle, r72_bowlbottom, _r72_t0;
        _r72_t0 = this;
        r72_xn$setwidth$9Jrj = _r72_t0['set-width']['bind'](_r72_t0);
        r72_xn$assignunicode$7Hrq = _r72_t0['assign-unicode']['bind'](_r72_t0);
        r72_xn$startfrom$1aao = _r72_t0['start-from']['bind'](_r72_t0);
        r72_xn$lineto$5sIl = _r72_t0['line-to']['bind'](_r72_t0);
        r72_xn$curveto$1aao = _r72_t0['curve-to']['bind'](_r72_t0);
        r72_xn$cubicto$1aao = _r72_t0['cubic-to']['bind'](_r72_t0);
        r72_xn$putshapes$9Jrj = _r72_t0['put-shapes']['bind'](_r72_t0);
        r72_xn$reverselast$3qIs = _r72_t0['reverse-last']['bind'](_r72_t0);
        r72_include = _r72_t0['include']['bind'](_r72_t0);
        r72_xn$createstroke$7Hrq = _r72_t0['create-stroke']['bind'](_r72_t0);
        r72_xn$setanchor$9Jrj = _r72_t0['set-anchor']['bind'](_r72_t0);
        _r72_t0['gizmo'] = r0_globalTransform;
        _r72_t0['set-width'](r0_WIDTH);
        r72_xn$setwidth$9Jrj(r0_WIDTH);
        r72_xn$assignunicode$7Hrq('S');
        r72_include(r0_capitalMarks);
        r72_slope = r0_STROKE * 0.00092;
        r72_expand = 0.35;
        r72_coexpand = (1 - r72_expand) / 2;
        r72_ssmootha = r0_SMOOTHA;
        r72_bowltop = r72_xn$createstroke$7Hrq();
        r72_bowltop['start-from'](r0_RIGHTSB - r0_OXHOOK, r0_CAP - r0_HOOK)['set-width'](r0_STROKE, 0)['curve-to'](r0_MIDDLE + r0_KAPPA_HOOK * (r0_MIDDLE - r0_para['sb']), r0_CAPO, r0_MIDDLE, r0_CAPO)['heads-to'](r0_LEFTWARD)['arc-hv-to'](r0_SB, r0_CAP - r72_ssmootha);
        r72_strokemiddle = r72_xn$createstroke$7Hrq();
        r72_strokemiddle['start-from'](r0_SB + r0_STROKE / 2, r0_CAP - r72_ssmootha)['set-width'](r0_STROKE / 2, r0_STROKE / 2)['curve-to'](r0_SB + r0_STROKE / 2, (0.5 + r72_slope) * r0_CAP + 2 * r72_slope * r0_CAP / (r72_expand * r0_WIDTH) * (r72_coexpand * r0_WIDTH - r0_SB - r0_STROKE / 2), r72_coexpand * r0_WIDTH, (0.5 + r72_slope) * r0_CAP)['line-to']((1 - r72_coexpand) * r0_WIDTH, (0.5 - r72_slope) * r0_CAP)['curve-to'](r0_RIGHTSB - r0_STROKE / 2, (0.5 - r72_slope) * r0_CAP - 2 * r72_slope * r0_CAP / (r72_expand * r0_WIDTH) * (r72_coexpand * r0_WIDTH - r0_SB - r0_STROKE / 2), r0_RIGHTSB - r0_STROKE / 2, r72_ssmootha);
        r72_bowlbottom = r72_xn$createstroke$7Hrq();
        r72_bowlbottom['start-from'](r0_RIGHTSB, r72_ssmootha)['set-width'](0, r0_STROKE)['arc-vh-to'](r0_MIDDLE, r0_O)['heads-to'](r0_LEFTWARD)['curve-to'](r0_MIDDLE - r0_KAPPA_HOOK * (r0_MIDDLE - r0_para['sb']), r0_O, r0_SB + r0_OXHOOK, r0_HOOK);
        r72_xn$putshapes$9Jrj(r72_bowltop['form-stroke']());
        r72_xn$putshapes$9Jrj(r72_strokemiddle['form-stroke']());
        r72_xn$putshapes$9Jrj(r72_bowlbottom['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('dollar', function _r0_t38() {
        var r74_xn$setwidth$9Jrj, r74_xn$assignunicode$7Hrq, r74_xn$startfrom$1aao, r74_xn$lineto$5sIl, r74_xn$curveto$1aao, r74_xn$cubicto$1aao, r74_xn$putshapes$9Jrj, r74_xn$reverselast$3qIs, r74_include, r74_xn$createstroke$7Hrq, r74_xn$setanchor$9Jrj, _r74_t0;
        _r74_t0 = this;
        r74_xn$setwidth$9Jrj = _r74_t0['set-width']['bind'](_r74_t0);
        r74_xn$assignunicode$7Hrq = _r74_t0['assign-unicode']['bind'](_r74_t0);
        r74_xn$startfrom$1aao = _r74_t0['start-from']['bind'](_r74_t0);
        r74_xn$lineto$5sIl = _r74_t0['line-to']['bind'](_r74_t0);
        r74_xn$curveto$1aao = _r74_t0['curve-to']['bind'](_r74_t0);
        r74_xn$cubicto$1aao = _r74_t0['cubic-to']['bind'](_r74_t0);
        r74_xn$putshapes$9Jrj = _r74_t0['put-shapes']['bind'](_r74_t0);
        r74_xn$reverselast$3qIs = _r74_t0['reverse-last']['bind'](_r74_t0);
        r74_include = _r74_t0['include']['bind'](_r74_t0);
        r74_xn$createstroke$7Hrq = _r74_t0['create-stroke']['bind'](_r74_t0);
        r74_xn$setanchor$9Jrj = _r74_t0['set-anchor']['bind'](_r74_t0);
        _r74_t0['gizmo'] = r0_globalTransform;
        _r74_t0['set-width'](r0_WIDTH);
        r74_xn$setwidth$9Jrj(r0_WIDTH);
        r74_xn$assignunicode$7Hrq('$');
        r74_xn$putshapes$9Jrj(r0_glyphs['S']['contours']);
        r74_xn$putshapes$9Jrj(r74_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE, r0_CAP - r0_HALFSTROKE)['set-width'](r0_HALFSTROKE, r0_HALFSTROKE)['line-to'](r0_MIDDLE, r0_CAP - r0_DESCENDER / 2)['form-stroke']());
        r74_xn$putshapes$9Jrj(r74_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE, r0_DESCENDER / 2)['set-width'](r0_HALFSTROKE, r0_HALFSTROKE)['line-to'](r0_MIDDLE, r0_HALFSTROKE)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('o', function _r0_t39() {
        var r76_xn$setwidth$9Jrj, r76_xn$assignunicode$7Hrq, r76_xn$startfrom$1aao, r76_xn$lineto$5sIl, r76_xn$curveto$1aao, r76_xn$cubicto$1aao, r76_xn$putshapes$9Jrj, r76_xn$reverselast$3qIs, r76_include, r76_xn$createstroke$7Hrq, r76_xn$setanchor$9Jrj, r76_outline, _r76_t0;
        _r76_t0 = this;
        r76_xn$setwidth$9Jrj = _r76_t0['set-width']['bind'](_r76_t0);
        r76_xn$assignunicode$7Hrq = _r76_t0['assign-unicode']['bind'](_r76_t0);
        r76_xn$startfrom$1aao = _r76_t0['start-from']['bind'](_r76_t0);
        r76_xn$lineto$5sIl = _r76_t0['line-to']['bind'](_r76_t0);
        r76_xn$curveto$1aao = _r76_t0['curve-to']['bind'](_r76_t0);
        r76_xn$cubicto$1aao = _r76_t0['cubic-to']['bind'](_r76_t0);
        r76_xn$putshapes$9Jrj = _r76_t0['put-shapes']['bind'](_r76_t0);
        r76_xn$reverselast$3qIs = _r76_t0['reverse-last']['bind'](_r76_t0);
        r76_include = _r76_t0['include']['bind'](_r76_t0);
        r76_xn$createstroke$7Hrq = _r76_t0['create-stroke']['bind'](_r76_t0);
        r76_xn$setanchor$9Jrj = _r76_t0['set-anchor']['bind'](_r76_t0);
        _r76_t0['gizmo'] = r0_globalTransform;
        _r76_t0['set-width'](r0_WIDTH);
        r76_xn$setwidth$9Jrj(r0_WIDTH);
        r76_xn$assignunicode$7Hrq('o');
        r76_include(r0_eMarks);
        r76_outline = r76_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE, r0_XO)['set-width'](r0_STROKE, 0)['heads-to'](r0_LEFTWARD)['arc-hv-to'](r0_SB + r0_O, r0_XH - r0_SMALLSMOOTHA)['line-to'](r0_SB + r0_O, r0_SMALLSMOOTHB)['arc-vh-to'](r0_MIDDLE, r0_O)['heads-to'](r0_RIGHTWARD)['arc-hv-to'](r0_RIGHTSB - r0_O, r0_SMALLSMOOTHA)['line-to'](r0_RIGHTSB - r0_O, r0_XH - r0_SMALLSMOOTHB)['arc-vh-to'](r0_MIDDLE, r0_XO)['heads-to'](r0_LEFTWARD);
        r76_xn$putshapes$9Jrj(r76_outline['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('o.left', function _r0_t40() {
        var r78_xn$setwidth$9Jrj, r78_xn$assignunicode$7Hrq, r78_xn$startfrom$1aao, r78_xn$lineto$5sIl, r78_xn$curveto$1aao, r78_xn$cubicto$1aao, r78_xn$putshapes$9Jrj, r78_xn$reverselast$3qIs, r78_include, r78_xn$createstroke$7Hrq, r78_xn$setanchor$9Jrj, _r78_t0;
        _r78_t0 = this;
        r78_xn$setwidth$9Jrj = _r78_t0['set-width']['bind'](_r78_t0);
        r78_xn$assignunicode$7Hrq = _r78_t0['assign-unicode']['bind'](_r78_t0);
        r78_xn$startfrom$1aao = _r78_t0['start-from']['bind'](_r78_t0);
        r78_xn$lineto$5sIl = _r78_t0['line-to']['bind'](_r78_t0);
        r78_xn$curveto$1aao = _r78_t0['curve-to']['bind'](_r78_t0);
        r78_xn$cubicto$1aao = _r78_t0['cubic-to']['bind'](_r78_t0);
        r78_xn$putshapes$9Jrj = _r78_t0['put-shapes']['bind'](_r78_t0);
        r78_xn$reverselast$3qIs = _r78_t0['reverse-last']['bind'](_r78_t0);
        r78_include = _r78_t0['include']['bind'](_r78_t0);
        r78_xn$createstroke$7Hrq = _r78_t0['create-stroke']['bind'](_r78_t0);
        r78_xn$setanchor$9Jrj = _r78_t0['set-anchor']['bind'](_r78_t0);
        _r78_t0['gizmo'] = r0_globalTransform;
        _r78_t0['set-width'](r0_WIDTH);
        r78_xn$setwidth$9Jrj(r0_WIDTH);
        r78_xn$putshapes$9Jrj(r78_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE, r0_XO)['heads-to'](r0_RIGHTWARD)['set-width'](0, r0_STROKE)['arc-hv-to'](r0_RIGHTSB - r0_O, r0_XH - r0_SMALLSMOOTHB)['line-to'](r0_RIGHTSB - r0_O, r0_SMALLSMOOTHA)['arc-vh-to'](r0_MIDDLE, r0_O)['heads-to'](r0_LEFTWARD)['form-stroke']());
        r78_xn$putshapes$9Jrj(r78_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE, r0_O + r0_STROKE)['heads-to'](r0_LEFTWARD)['set-width'](r0_STROKE, 0)['arc-hv-to'](r0_SB + r0_STROKE, r0_SMALLSMOOTHB - r0_STROKE * 0.05)['set-width'](r0_HALFSTROKE, 0)['line-to'](r0_SB + r0_STROKE, r0_XH - r0_SMALLSMOOTHA + r0_STROKE * 0.05)['set-width'](r0_HALFSTROKE, 0)['arc-vh-to'](r0_MIDDLE, r0_XO - r0_STROKE)['set-width'](r0_STROKE, 0)['heads-to'](r0_RIGHTWARD)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('o.right', function _r0_t41() {
        var r80_xn$setwidth$9Jrj, r80_xn$assignunicode$7Hrq, r80_xn$startfrom$1aao, r80_xn$lineto$5sIl, r80_xn$curveto$1aao, r80_xn$cubicto$1aao, r80_xn$putshapes$9Jrj, r80_xn$reverselast$3qIs, r80_include, r80_xn$createstroke$7Hrq, r80_xn$setanchor$9Jrj, _r80_t0;
        _r80_t0 = this;
        r80_xn$setwidth$9Jrj = _r80_t0['set-width']['bind'](_r80_t0);
        r80_xn$assignunicode$7Hrq = _r80_t0['assign-unicode']['bind'](_r80_t0);
        r80_xn$startfrom$1aao = _r80_t0['start-from']['bind'](_r80_t0);
        r80_xn$lineto$5sIl = _r80_t0['line-to']['bind'](_r80_t0);
        r80_xn$curveto$1aao = _r80_t0['curve-to']['bind'](_r80_t0);
        r80_xn$cubicto$1aao = _r80_t0['cubic-to']['bind'](_r80_t0);
        r80_xn$putshapes$9Jrj = _r80_t0['put-shapes']['bind'](_r80_t0);
        r80_xn$reverselast$3qIs = _r80_t0['reverse-last']['bind'](_r80_t0);
        r80_include = _r80_t0['include']['bind'](_r80_t0);
        r80_xn$createstroke$7Hrq = _r80_t0['create-stroke']['bind'](_r80_t0);
        r80_xn$setanchor$9Jrj = _r80_t0['set-anchor']['bind'](_r80_t0);
        _r80_t0['gizmo'] = r0_globalTransform;
        _r80_t0['set-width'](r0_WIDTH);
        r80_xn$setwidth$9Jrj(r0_WIDTH);
        r80_xn$putshapes$9Jrj(r80_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE, r0_XO)['heads-to'](r0_LEFTWARD)['set-width'](r0_STROKE, 0)['arc-hv-to'](r0_SB + r0_O, r0_XH - r0_SMALLSMOOTHA)['line-to'](r0_SB + r0_O, r0_SMALLSMOOTHB)['arc-vh-to'](r0_MIDDLE, r0_O)['heads-to'](r0_RIGHTWARD)['form-stroke']());
        r80_xn$putshapes$9Jrj(r80_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE, r0_O + r0_STROKE)['heads-to'](r0_RIGHTWARD)['set-width'](0, r0_STROKE)['arc-hv-to'](r0_RIGHTSB - r0_STROKE, r0_SMALLSMOOTHA - r0_STROKE * 0.05)['set-width'](0, r0_HALFSTROKE)['line-to'](r0_RIGHTSB - r0_STROKE, r0_XH - r0_SMALLSMOOTHB + r0_STROKE * 0.05)['set-width'](0, r0_HALFSTROKE)['arc-vh-to'](r0_MIDDLE, r0_XO - r0_STROKE)['set-width'](0, r0_STROKE)['heads-to'](r0_LEFTWARD)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('p', function _r0_t42() {
        var r82_xn$setwidth$9Jrj, r82_xn$assignunicode$7Hrq, r82_xn$startfrom$1aao, r82_xn$lineto$5sIl, r82_xn$curveto$1aao, r82_xn$cubicto$1aao, r82_xn$putshapes$9Jrj, r82_xn$reverselast$3qIs, r82_include, r82_xn$createstroke$7Hrq, r82_xn$setanchor$9Jrj, _r82_t0;
        _r82_t0 = this;
        r82_xn$setwidth$9Jrj = _r82_t0['set-width']['bind'](_r82_t0);
        r82_xn$assignunicode$7Hrq = _r82_t0['assign-unicode']['bind'](_r82_t0);
        r82_xn$startfrom$1aao = _r82_t0['start-from']['bind'](_r82_t0);
        r82_xn$lineto$5sIl = _r82_t0['line-to']['bind'](_r82_t0);
        r82_xn$curveto$1aao = _r82_t0['curve-to']['bind'](_r82_t0);
        r82_xn$cubicto$1aao = _r82_t0['cubic-to']['bind'](_r82_t0);
        r82_xn$putshapes$9Jrj = _r82_t0['put-shapes']['bind'](_r82_t0);
        r82_xn$reverselast$3qIs = _r82_t0['reverse-last']['bind'](_r82_t0);
        r82_include = _r82_t0['include']['bind'](_r82_t0);
        r82_xn$createstroke$7Hrq = _r82_t0['create-stroke']['bind'](_r82_t0);
        r82_xn$setanchor$9Jrj = _r82_t0['set-anchor']['bind'](_r82_t0);
        _r82_t0['gizmo'] = r0_globalTransform;
        _r82_t0['set-width'](r0_WIDTH);
        r82_xn$setwidth$9Jrj(r0_WIDTH);
        r82_xn$assignunicode$7Hrq('p');
        r82_include(r0_eMarks);
        r82_include(r0_glyphs['o.left']);
        r82_xn$putshapes$9Jrj(r82_xn$createstroke$7Hrq()['start-from'](r0_SB, r0_XH)['heads-to'](r0_DOWNWARD)['set-width'](r0_STROKE, 0)['line-to'](r0_SB, r0_DESCENDER)['heads-to'](r0_DOWNWARD)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('b', function _r0_t43() {
        var r84_xn$setwidth$9Jrj, r84_xn$assignunicode$7Hrq, r84_xn$startfrom$1aao, r84_xn$lineto$5sIl, r84_xn$curveto$1aao, r84_xn$cubicto$1aao, r84_xn$putshapes$9Jrj, r84_xn$reverselast$3qIs, r84_include, r84_xn$createstroke$7Hrq, r84_xn$setanchor$9Jrj, _r84_t0;
        _r84_t0 = this;
        r84_xn$setwidth$9Jrj = _r84_t0['set-width']['bind'](_r84_t0);
        r84_xn$assignunicode$7Hrq = _r84_t0['assign-unicode']['bind'](_r84_t0);
        r84_xn$startfrom$1aao = _r84_t0['start-from']['bind'](_r84_t0);
        r84_xn$lineto$5sIl = _r84_t0['line-to']['bind'](_r84_t0);
        r84_xn$curveto$1aao = _r84_t0['curve-to']['bind'](_r84_t0);
        r84_xn$cubicto$1aao = _r84_t0['cubic-to']['bind'](_r84_t0);
        r84_xn$putshapes$9Jrj = _r84_t0['put-shapes']['bind'](_r84_t0);
        r84_xn$reverselast$3qIs = _r84_t0['reverse-last']['bind'](_r84_t0);
        r84_include = _r84_t0['include']['bind'](_r84_t0);
        r84_xn$createstroke$7Hrq = _r84_t0['create-stroke']['bind'](_r84_t0);
        r84_xn$setanchor$9Jrj = _r84_t0['set-anchor']['bind'](_r84_t0);
        _r84_t0['gizmo'] = r0_globalTransform;
        _r84_t0['set-width'](r0_WIDTH);
        r84_xn$setwidth$9Jrj(r0_WIDTH);
        r84_xn$assignunicode$7Hrq('b');
        r84_include(r0_bMarks);
        r84_xn$putshapes$9Jrj(r0_glyphs['o.left']['contours']);
        r84_xn$putshapes$9Jrj(r84_xn$createstroke$7Hrq()['start-from'](r0_SB, 0)['heads-to'](r0_UPWARD)['set-width'](0, r0_STROKE)['line-to'](r0_SB, r0_CAP)['heads-to'](r0_UPWARD)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('q', function _r0_t44() {
        var r86_xn$setwidth$9Jrj, r86_xn$assignunicode$7Hrq, r86_xn$startfrom$1aao, r86_xn$lineto$5sIl, r86_xn$curveto$1aao, r86_xn$cubicto$1aao, r86_xn$putshapes$9Jrj, r86_xn$reverselast$3qIs, r86_include, r86_xn$createstroke$7Hrq, r86_xn$setanchor$9Jrj, _r86_t0;
        _r86_t0 = this;
        r86_xn$setwidth$9Jrj = _r86_t0['set-width']['bind'](_r86_t0);
        r86_xn$assignunicode$7Hrq = _r86_t0['assign-unicode']['bind'](_r86_t0);
        r86_xn$startfrom$1aao = _r86_t0['start-from']['bind'](_r86_t0);
        r86_xn$lineto$5sIl = _r86_t0['line-to']['bind'](_r86_t0);
        r86_xn$curveto$1aao = _r86_t0['curve-to']['bind'](_r86_t0);
        r86_xn$cubicto$1aao = _r86_t0['cubic-to']['bind'](_r86_t0);
        r86_xn$putshapes$9Jrj = _r86_t0['put-shapes']['bind'](_r86_t0);
        r86_xn$reverselast$3qIs = _r86_t0['reverse-last']['bind'](_r86_t0);
        r86_include = _r86_t0['include']['bind'](_r86_t0);
        r86_xn$createstroke$7Hrq = _r86_t0['create-stroke']['bind'](_r86_t0);
        r86_xn$setanchor$9Jrj = _r86_t0['set-anchor']['bind'](_r86_t0);
        _r86_t0['gizmo'] = r0_globalTransform;
        _r86_t0['set-width'](r0_WIDTH);
        r86_xn$setwidth$9Jrj(r0_WIDTH);
        r86_xn$assignunicode$7Hrq('q');
        r86_include(r0_eMarks);
        r86_xn$putshapes$9Jrj(r0_glyphs['o.right']['contours']);
        r86_xn$putshapes$9Jrj(r86_xn$createstroke$7Hrq()['start-from'](r0_RIGHTSB, r0_XH)['heads-to'](r0_DOWNWARD)['set-width'](0, r0_STROKE)['line-to'](r0_RIGHTSB, r0_DESCENDER)['heads-to'](r0_DOWNWARD)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('d', function _r0_t45() {
        var r88_xn$setwidth$9Jrj, r88_xn$assignunicode$7Hrq, r88_xn$startfrom$1aao, r88_xn$lineto$5sIl, r88_xn$curveto$1aao, r88_xn$cubicto$1aao, r88_xn$putshapes$9Jrj, r88_xn$reverselast$3qIs, r88_include, r88_xn$createstroke$7Hrq, r88_xn$setanchor$9Jrj, _r88_t0;
        _r88_t0 = this;
        r88_xn$setwidth$9Jrj = _r88_t0['set-width']['bind'](_r88_t0);
        r88_xn$assignunicode$7Hrq = _r88_t0['assign-unicode']['bind'](_r88_t0);
        r88_xn$startfrom$1aao = _r88_t0['start-from']['bind'](_r88_t0);
        r88_xn$lineto$5sIl = _r88_t0['line-to']['bind'](_r88_t0);
        r88_xn$curveto$1aao = _r88_t0['curve-to']['bind'](_r88_t0);
        r88_xn$cubicto$1aao = _r88_t0['cubic-to']['bind'](_r88_t0);
        r88_xn$putshapes$9Jrj = _r88_t0['put-shapes']['bind'](_r88_t0);
        r88_xn$reverselast$3qIs = _r88_t0['reverse-last']['bind'](_r88_t0);
        r88_include = _r88_t0['include']['bind'](_r88_t0);
        r88_xn$createstroke$7Hrq = _r88_t0['create-stroke']['bind'](_r88_t0);
        r88_xn$setanchor$9Jrj = _r88_t0['set-anchor']['bind'](_r88_t0);
        _r88_t0['gizmo'] = r0_globalTransform;
        _r88_t0['set-width'](r0_WIDTH);
        r88_xn$setwidth$9Jrj(r0_WIDTH);
        r88_xn$assignunicode$7Hrq('d');
        r88_include(r0_bMarks);
        r88_xn$putshapes$9Jrj(r0_glyphs['o.right']['contours']);
        r88_xn$putshapes$9Jrj(r88_xn$createstroke$7Hrq()['start-from'](r0_RIGHTSB, 0)['heads-to'](r0_UPWARD)['set-width'](r0_STROKE, 0)['line-to'](r0_RIGHTSB, r0_CAP)['heads-to'](r0_UPWARD)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('g', function _r0_t46() {
        var r90_xn$setwidth$9Jrj, r90_xn$assignunicode$7Hrq, r90_xn$startfrom$1aao, r90_xn$lineto$5sIl, r90_xn$curveto$1aao, r90_xn$cubicto$1aao, r90_xn$putshapes$9Jrj, r90_xn$reverselast$3qIs, r90_include, r90_xn$createstroke$7Hrq, r90_xn$setanchor$9Jrj, _r90_t0;
        _r90_t0 = this;
        r90_xn$setwidth$9Jrj = _r90_t0['set-width']['bind'](_r90_t0);
        r90_xn$assignunicode$7Hrq = _r90_t0['assign-unicode']['bind'](_r90_t0);
        r90_xn$startfrom$1aao = _r90_t0['start-from']['bind'](_r90_t0);
        r90_xn$lineto$5sIl = _r90_t0['line-to']['bind'](_r90_t0);
        r90_xn$curveto$1aao = _r90_t0['curve-to']['bind'](_r90_t0);
        r90_xn$cubicto$1aao = _r90_t0['cubic-to']['bind'](_r90_t0);
        r90_xn$putshapes$9Jrj = _r90_t0['put-shapes']['bind'](_r90_t0);
        r90_xn$reverselast$3qIs = _r90_t0['reverse-last']['bind'](_r90_t0);
        r90_include = _r90_t0['include']['bind'](_r90_t0);
        r90_xn$createstroke$7Hrq = _r90_t0['create-stroke']['bind'](_r90_t0);
        r90_xn$setanchor$9Jrj = _r90_t0['set-anchor']['bind'](_r90_t0);
        _r90_t0['gizmo'] = r0_globalTransform;
        _r90_t0['set-width'](r0_WIDTH);
        r90_xn$setwidth$9Jrj(r0_WIDTH);
        r90_xn$assignunicode$7Hrq('g');
        r90_include(r0_pMarks);
        r90_xn$putshapes$9Jrj([
            r0_Ring(r0_XO, r0_XH * r0_GBARPOS, r0_SB * 1.25, r0_RIGHTSB - 0.25 * r0_SB, r0_SMALLSMOOTH),
            r0_Ring(r0_XO - r0_STROKE, r0_XH * r0_GBARPOS + r0_STROKE, r0_SB * 1.25 + r0_STROKE, r0_RIGHTSB - 0.25 * r0_SB - r0_STROKE, r0_SMALLSMOOTH - r0_STROKE)
        ]);
        r90_xn$reverselast$3qIs();
        r90_xn$putshapes$9Jrj(r90_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE, r0_XH * r0_GBARPOS)['set-width'](0, r0_STROKE * 0.75)['arc-hv-to'](r0_SB * 1.5 + r0_STROKE, (r0_O - r0_DESCENDER * 0.85 + r0_XH * r0_GBARPOS) * 0.47)['set-width'](0, r0_STROKE)['arc-vh-to'](r0_MIDDLE + r0_DESCENDER * 0.15, r0_O - r0_DESCENDER * 0.85)['line-to'](r0_MIDDLE - r0_DESCENDER * 0.15, r0_O - r0_DESCENDER * 0.85)['arc-hv-to'](r0_RIGHTSB - r0_O * 2, -r0_STROKE * r0_globalTransform['yx'] * 2)['arc-vh-to'](r0_MIDDLE, r0_DESCENDER + r0_O)['arc-hv-to'](r0_SB, r0_DESCENDER * 0.1)['arc-vh-to'](r0_MIDDLE + r0_DESCENDER * 0.15, r0_O - r0_DESCENDER * 0.85)['form-stroke']());
        r90_xn$startfrom$1aao(r0_RIGHTSB + 0.5 * r0_SB, r0_XH);
        r90_xn$lineto$5sIl(r0_RIGHTSB + 0.5 * r0_SB, r0_XH - r0_STROKE);
        r90_xn$lineto$5sIl(r0_MIDDLE, r0_XH - r0_STROKE - r0_O);
        r90_xn$lineto$5sIl(r0_MIDDLE, r0_XH);
        return void 0;
    });
    r0_xn$createglyph$7Hrq('c', function _r0_t47() {
        var r92_xn$setwidth$9Jrj, r92_xn$assignunicode$7Hrq, r92_xn$startfrom$1aao, r92_xn$lineto$5sIl, r92_xn$curveto$1aao, r92_xn$cubicto$1aao, r92_xn$putshapes$9Jrj, r92_xn$reverselast$3qIs, r92_include, r92_xn$createstroke$7Hrq, r92_xn$setanchor$9Jrj, r92_outline, _r92_t0;
        _r92_t0 = this;
        r92_xn$setwidth$9Jrj = _r92_t0['set-width']['bind'](_r92_t0);
        r92_xn$assignunicode$7Hrq = _r92_t0['assign-unicode']['bind'](_r92_t0);
        r92_xn$startfrom$1aao = _r92_t0['start-from']['bind'](_r92_t0);
        r92_xn$lineto$5sIl = _r92_t0['line-to']['bind'](_r92_t0);
        r92_xn$curveto$1aao = _r92_t0['curve-to']['bind'](_r92_t0);
        r92_xn$cubicto$1aao = _r92_t0['cubic-to']['bind'](_r92_t0);
        r92_xn$putshapes$9Jrj = _r92_t0['put-shapes']['bind'](_r92_t0);
        r92_xn$reverselast$3qIs = _r92_t0['reverse-last']['bind'](_r92_t0);
        r92_include = _r92_t0['include']['bind'](_r92_t0);
        r92_xn$createstroke$7Hrq = _r92_t0['create-stroke']['bind'](_r92_t0);
        r92_xn$setanchor$9Jrj = _r92_t0['set-anchor']['bind'](_r92_t0);
        _r92_t0['gizmo'] = r0_globalTransform;
        _r92_t0['set-width'](r0_WIDTH);
        r92_xn$setwidth$9Jrj(r0_WIDTH);
        r92_xn$assignunicode$7Hrq('c');
        r92_include(r0_eMarks);
        r92_outline = r92_xn$createstroke$7Hrq();
        r92_outline['start-from'](r0_RIGHTSB - r0_OXHOOK, r0_XH - r0_HOOK)['curve-to'](r0_MIDDLE + r0_KAPPA_HOOK * (r0_MIDDLE - r0_para['sb']), r0_XO, r0_MIDDLE, r0_XO)['heads-to'](r0_LEFTWARD)['arc-hv-to'](r0_SB + r0_O, r0_XH - r0_SMALLSMOOTHA)['line-to'](r0_SB + r0_O, r0_SMALLSMOOTHB)['arc-vh-to'](r0_MIDDLE, r0_O)['heads-to'](r0_RIGHTWARD)['curve-to'](r0_MIDDLE + (r0_KAPPA_HOOK + r0_TAILADJKAPPA * r0_globalTransform['yx']) * (r0_MIDDLE - r0_SB), r0_O, r0_RIGHTSB - r0_OXHOOK + r0_TAILADJX * r0_globalTransform['yx'], r0_HOOK - r0_TAILADJY * r0_globalTransform['yx']);
        r92_xn$putshapes$9Jrj(r92_outline['form-stroke'](r0_STROKE, 0));
        return void 0;
    });
    r0_xn$createglyph$7Hrq('e', function _r0_t48() {
        var r94_xn$setwidth$9Jrj, r94_xn$assignunicode$7Hrq, r94_xn$startfrom$1aao, r94_xn$lineto$5sIl, r94_xn$curveto$1aao, r94_xn$cubicto$1aao, r94_xn$putshapes$9Jrj, r94_xn$reverselast$3qIs, r94_include, r94_xn$createstroke$7Hrq, r94_xn$setanchor$9Jrj, r94_barbottom, r94_outline, r94_bar, _r94_t0;
        _r94_t0 = this;
        r94_xn$setwidth$9Jrj = _r94_t0['set-width']['bind'](_r94_t0);
        r94_xn$assignunicode$7Hrq = _r94_t0['assign-unicode']['bind'](_r94_t0);
        r94_xn$startfrom$1aao = _r94_t0['start-from']['bind'](_r94_t0);
        r94_xn$lineto$5sIl = _r94_t0['line-to']['bind'](_r94_t0);
        r94_xn$curveto$1aao = _r94_t0['curve-to']['bind'](_r94_t0);
        r94_xn$cubicto$1aao = _r94_t0['cubic-to']['bind'](_r94_t0);
        r94_xn$putshapes$9Jrj = _r94_t0['put-shapes']['bind'](_r94_t0);
        r94_xn$reverselast$3qIs = _r94_t0['reverse-last']['bind'](_r94_t0);
        r94_include = _r94_t0['include']['bind'](_r94_t0);
        r94_xn$createstroke$7Hrq = _r94_t0['create-stroke']['bind'](_r94_t0);
        r94_xn$setanchor$9Jrj = _r94_t0['set-anchor']['bind'](_r94_t0);
        _r94_t0['gizmo'] = r0_globalTransform;
        _r94_t0['set-width'](r0_WIDTH);
        r94_xn$setwidth$9Jrj(r0_WIDTH);
        r94_xn$assignunicode$7Hrq('e');
        r94_include(r0_eMarks);
        r94_barbottom = r0_XH * r0_BARPOS;
        r94_outline = r94_xn$createstroke$7Hrq()['start-from'](r0_RIGHTSB - r0_O, r94_barbottom)['heads-to'](r0_UPWARD)['set-width'](r0_STROKE, 0)['line-to'](r0_RIGHTSB - r0_O, r0_XH - r0_SMALLSMOOTHB)['arc-vh-to'](r0_MIDDLE, r0_XO)['heads-to'](r0_LEFTWARD)['arc-hv-to'](r0_SB + r0_O, r0_XH - r0_SMALLSMOOTHA)['line-to'](r0_SB + r0_O, r0_SMALLSMOOTHB)['arc-vh-to'](r0_MIDDLE, r0_O)['heads-to'](r0_RIGHTWARD)['curve-to'](r0_MIDDLE + (r0_KAPPA_HOOK + r0_TAILADJKAPPA * r0_globalTransform['yx']) * (r0_MIDDLE - r0_SB), r0_O, r0_RIGHTSB - r0_OXHOOK + r0_TAILADJX * r0_globalTransform['yx'], r0_HOOK - r0_TAILADJY * r0_globalTransform['yx']);
        r94_bar = r94_xn$createstroke$7Hrq()['start-from'](r0_SB + r0_HALFSTROKE, r94_barbottom)['set-width'](r0_STROKE, 0)['heads-to'](r0_RIGHTWARD)['line-to'](r0_RIGHTSB - r0_HALFSTROKE, r94_barbottom)['heads-to'](r0_RIGHTWARD);
        r94_xn$putshapes$9Jrj(r94_outline['form-stroke']());
        r94_xn$putshapes$9Jrj(r94_bar['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('a.upright', function _r0_t49() {
        var r96_xn$setwidth$9Jrj, r96_xn$assignunicode$7Hrq, r96_xn$startfrom$1aao, r96_xn$lineto$5sIl, r96_xn$curveto$1aao, r96_xn$cubicto$1aao, r96_xn$putshapes$9Jrj, r96_xn$reverselast$3qIs, r96_include, r96_xn$createstroke$7Hrq, r96_xn$setanchor$9Jrj, r96_bartop, _r96_t0;
        _r96_t0 = this;
        r96_xn$setwidth$9Jrj = _r96_t0['set-width']['bind'](_r96_t0);
        r96_xn$assignunicode$7Hrq = _r96_t0['assign-unicode']['bind'](_r96_t0);
        r96_xn$startfrom$1aao = _r96_t0['start-from']['bind'](_r96_t0);
        r96_xn$lineto$5sIl = _r96_t0['line-to']['bind'](_r96_t0);
        r96_xn$curveto$1aao = _r96_t0['curve-to']['bind'](_r96_t0);
        r96_xn$cubicto$1aao = _r96_t0['cubic-to']['bind'](_r96_t0);
        r96_xn$putshapes$9Jrj = _r96_t0['put-shapes']['bind'](_r96_t0);
        r96_xn$reverselast$3qIs = _r96_t0['reverse-last']['bind'](_r96_t0);
        r96_include = _r96_t0['include']['bind'](_r96_t0);
        r96_xn$createstroke$7Hrq = _r96_t0['create-stroke']['bind'](_r96_t0);
        r96_xn$setanchor$9Jrj = _r96_t0['set-anchor']['bind'](_r96_t0);
        _r96_t0['gizmo'] = r0_globalTransform;
        _r96_t0['set-width'](r0_WIDTH);
        r96_xn$setwidth$9Jrj(r0_WIDTH);
        r96_bartop = r0_XH * r0_BARPOS + r0_STROKE;
        r96_xn$putshapes$9Jrj(r96_xn$createstroke$7Hrq()['start-from'](r0_RIGHTSB, 0)['heads-to'](r0_UPWARD)['set-width'](r0_STROKE, 0)['line-to'](r0_RIGHTSB, r0_XH - r0_SMOOTHA)['arc-vh-to'](r0_MIDDLE, r0_XO)['heads-to'](r0_LEFTWARD)['curve-to'](r0_MIDDLE - r0_KAPPA_AHOOK * (r0_MIDDLE - r0_SB), r0_XO, r0_SB + r0_OXHOOK, r0_XH - r0_AHOOK)['form-stroke']());
        r96_xn$putshapes$9Jrj(r96_xn$createstroke$7Hrq()['start-from'](r0_WIDTH * 0.47, r0_O)['set-width'](0, r0_STROKE)['heads-to'](r0_LEFTWARD)['arc-hv-to'](r0_SB + r0_O, r96_bartop * 0.45)['arc-vh-to'](r0_WIDTH * 0.6, r96_bartop)['line-to'](r0_RIGHTSB, r96_bartop)['heads-to'](r0_RIGHTWARD)['form-stroke']());
        r96_xn$putshapes$9Jrj(r96_xn$createstroke$7Hrq()['start-from'](r0_WIDTH * 0.47, r0_O + r0_STROKE)['set-width'](0, r0_STROKE)['heads-to'](r0_RIGHTWARD)['arc-hv-to'](r0_RIGHTSB - r0_STROKE, r0_SMALLSMOOTHA * 0.65)['heads-to'](r0_UPWARD)['set-width'](0, r0_STROKE * 0.4)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('a.italic', function _r0_t50() {
        var r98_xn$setwidth$9Jrj, r98_xn$assignunicode$7Hrq, r98_xn$startfrom$1aao, r98_xn$lineto$5sIl, r98_xn$curveto$1aao, r98_xn$cubicto$1aao, r98_xn$putshapes$9Jrj, r98_xn$reverselast$3qIs, r98_include, r98_xn$createstroke$7Hrq, r98_xn$setanchor$9Jrj, _r98_t0;
        _r98_t0 = this;
        r98_xn$setwidth$9Jrj = _r98_t0['set-width']['bind'](_r98_t0);
        r98_xn$assignunicode$7Hrq = _r98_t0['assign-unicode']['bind'](_r98_t0);
        r98_xn$startfrom$1aao = _r98_t0['start-from']['bind'](_r98_t0);
        r98_xn$lineto$5sIl = _r98_t0['line-to']['bind'](_r98_t0);
        r98_xn$curveto$1aao = _r98_t0['curve-to']['bind'](_r98_t0);
        r98_xn$cubicto$1aao = _r98_t0['cubic-to']['bind'](_r98_t0);
        r98_xn$putshapes$9Jrj = _r98_t0['put-shapes']['bind'](_r98_t0);
        r98_xn$reverselast$3qIs = _r98_t0['reverse-last']['bind'](_r98_t0);
        r98_include = _r98_t0['include']['bind'](_r98_t0);
        r98_xn$createstroke$7Hrq = _r98_t0['create-stroke']['bind'](_r98_t0);
        r98_xn$setanchor$9Jrj = _r98_t0['set-anchor']['bind'](_r98_t0);
        _r98_t0['gizmo'] = r0_globalTransform;
        _r98_t0['set-width'](r0_WIDTH);
        r98_xn$setwidth$9Jrj(r0_WIDTH);
        r98_include(r0_glyphs['o.right']);
        r98_xn$putshapes$9Jrj(r98_xn$createstroke$7Hrq()['start-from'](r0_RIGHTSB, 0)['heads-to'](r0_UPWARD)['set-width'](r0_STROKE, 0)['line-to'](r0_RIGHTSB, r0_XH)['heads-to'](r0_UPWARD)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('a', function _r0_t51() {
        var r100_xn$setwidth$9Jrj, r100_xn$assignunicode$7Hrq, r100_xn$startfrom$1aao, r100_xn$lineto$5sIl, r100_xn$curveto$1aao, r100_xn$cubicto$1aao, r100_xn$putshapes$9Jrj, r100_xn$reverselast$3qIs, r100_include, r100_xn$createstroke$7Hrq, r100_xn$setanchor$9Jrj, _r100_t0;
        _r100_t0 = this;
        r100_xn$setwidth$9Jrj = _r100_t0['set-width']['bind'](_r100_t0);
        r100_xn$assignunicode$7Hrq = _r100_t0['assign-unicode']['bind'](_r100_t0);
        r100_xn$startfrom$1aao = _r100_t0['start-from']['bind'](_r100_t0);
        r100_xn$lineto$5sIl = _r100_t0['line-to']['bind'](_r100_t0);
        r100_xn$curveto$1aao = _r100_t0['curve-to']['bind'](_r100_t0);
        r100_xn$cubicto$1aao = _r100_t0['cubic-to']['bind'](_r100_t0);
        r100_xn$putshapes$9Jrj = _r100_t0['put-shapes']['bind'](_r100_t0);
        r100_xn$reverselast$3qIs = _r100_t0['reverse-last']['bind'](_r100_t0);
        r100_include = _r100_t0['include']['bind'](_r100_t0);
        r100_xn$createstroke$7Hrq = _r100_t0['create-stroke']['bind'](_r100_t0);
        r100_xn$setanchor$9Jrj = _r100_t0['set-anchor']['bind'](_r100_t0);
        _r100_t0['gizmo'] = r0_globalTransform;
        _r100_t0['set-width'](r0_WIDTH);
        r100_xn$setwidth$9Jrj(r0_WIDTH);
        r100_xn$assignunicode$7Hrq('a');
        r100_include(r0_eMarks);
        if (r0_para['italicangle'] > 0) {
            r100_include(r0_glyphs['a.italic']);
        } else {
            r100_include(r0_glyphs['a.upright']);
        }
        return void 0;
    });
    r0_xn$createglyph$7Hrq('u', function _r0_t52() {
        var r102_xn$setwidth$9Jrj, r102_xn$assignunicode$7Hrq, r102_xn$startfrom$1aao, r102_xn$lineto$5sIl, r102_xn$curveto$1aao, r102_xn$cubicto$1aao, r102_xn$putshapes$9Jrj, r102_xn$reverselast$3qIs, r102_include, r102_xn$createstroke$7Hrq, r102_xn$setanchor$9Jrj, _r102_t0;
        _r102_t0 = this;
        r102_xn$setwidth$9Jrj = _r102_t0['set-width']['bind'](_r102_t0);
        r102_xn$assignunicode$7Hrq = _r102_t0['assign-unicode']['bind'](_r102_t0);
        r102_xn$startfrom$1aao = _r102_t0['start-from']['bind'](_r102_t0);
        r102_xn$lineto$5sIl = _r102_t0['line-to']['bind'](_r102_t0);
        r102_xn$curveto$1aao = _r102_t0['curve-to']['bind'](_r102_t0);
        r102_xn$cubicto$1aao = _r102_t0['cubic-to']['bind'](_r102_t0);
        r102_xn$putshapes$9Jrj = _r102_t0['put-shapes']['bind'](_r102_t0);
        r102_xn$reverselast$3qIs = _r102_t0['reverse-last']['bind'](_r102_t0);
        r102_include = _r102_t0['include']['bind'](_r102_t0);
        r102_xn$createstroke$7Hrq = _r102_t0['create-stroke']['bind'](_r102_t0);
        r102_xn$setanchor$9Jrj = _r102_t0['set-anchor']['bind'](_r102_t0);
        _r102_t0['gizmo'] = r0_globalTransform;
        _r102_t0['set-width'](r0_WIDTH);
        r102_xn$setwidth$9Jrj(r0_WIDTH);
        r102_xn$assignunicode$7Hrq('u');
        r102_include(r0_eMarks);
        r102_xn$putshapes$9Jrj(r102_xn$createstroke$7Hrq()['start-from'](r0_SB, r0_XH)['heads-to'](r0_DOWNWARD)['set-width'](r0_STROKE, 0)['line-to'](r0_SB, r0_SMALLSMOOTHA)['arc-vh-to'](r0_MIDDLE, r0_O)['heads-to'](r0_RIGHTWARD)['form-stroke']());
        r102_xn$putshapes$9Jrj(r102_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE, r0_O + r0_STROKE)['set-width'](0, r0_STROKE)['heads-to'](r0_RIGHTWARD)['arc-hv-to'](r0_RIGHTSB - r0_STROKE * r0_ITALICCOR, r0_SMALLSMOOTHA)['heads-to'](r0_UPWARD)['set-width'](0, r0_STROKE * 0.4)['form-stroke']());
        r102_xn$putshapes$9Jrj(r102_xn$createstroke$7Hrq()['start-from'](r0_RIGHTSB, 0)['heads-to'](r0_UPWARD)['set-width'](r0_STROKE, 0)['line-to'](r0_RIGHTSB, r0_XH)['heads-to'](r0_UPWARD)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('nbowl', function _r0_t53() {
        var r104_xn$setwidth$9Jrj, r104_xn$assignunicode$7Hrq, r104_xn$startfrom$1aao, r104_xn$lineto$5sIl, r104_xn$curveto$1aao, r104_xn$cubicto$1aao, r104_xn$putshapes$9Jrj, r104_xn$reverselast$3qIs, r104_include, r104_xn$createstroke$7Hrq, r104_xn$setanchor$9Jrj, _r104_t0;
        _r104_t0 = this;
        r104_xn$setwidth$9Jrj = _r104_t0['set-width']['bind'](_r104_t0);
        r104_xn$assignunicode$7Hrq = _r104_t0['assign-unicode']['bind'](_r104_t0);
        r104_xn$startfrom$1aao = _r104_t0['start-from']['bind'](_r104_t0);
        r104_xn$lineto$5sIl = _r104_t0['line-to']['bind'](_r104_t0);
        r104_xn$curveto$1aao = _r104_t0['curve-to']['bind'](_r104_t0);
        r104_xn$cubicto$1aao = _r104_t0['cubic-to']['bind'](_r104_t0);
        r104_xn$putshapes$9Jrj = _r104_t0['put-shapes']['bind'](_r104_t0);
        r104_xn$reverselast$3qIs = _r104_t0['reverse-last']['bind'](_r104_t0);
        r104_include = _r104_t0['include']['bind'](_r104_t0);
        r104_xn$createstroke$7Hrq = _r104_t0['create-stroke']['bind'](_r104_t0);
        r104_xn$setanchor$9Jrj = _r104_t0['set-anchor']['bind'](_r104_t0);
        _r104_t0['gizmo'] = r0_globalTransform;
        _r104_t0['set-width'](r0_WIDTH);
        r104_xn$putshapes$9Jrj(r104_xn$createstroke$7Hrq()['start-from'](r0_RIGHTSB, 0)['heads-to'](r0_UPWARD)['set-width'](r0_STROKE, 0)['line-to'](r0_RIGHTSB, r0_XH - r0_SMALLSMOOTHB)['arc-vh-to'](r0_MIDDLE, r0_XO)['heads-to'](r0_LEFTWARD)['form-stroke']());
        r104_xn$putshapes$9Jrj(r104_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE, r0_XO - r0_STROKE)['set-width'](0, r0_STROKE)['heads-to'](r0_LEFTWARD)['arc-hv-to'](r0_SB + r0_STROKE * r0_ITALICCOR, r0_XH - r0_SMALLSMOOTHA)['heads-to'](r0_DOWNWARD)['set-width'](0, r0_STROKE * 0.4)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('n', function _r0_t54() {
        var r106_xn$setwidth$9Jrj, r106_xn$assignunicode$7Hrq, r106_xn$startfrom$1aao, r106_xn$lineto$5sIl, r106_xn$curveto$1aao, r106_xn$cubicto$1aao, r106_xn$putshapes$9Jrj, r106_xn$reverselast$3qIs, r106_include, r106_xn$createstroke$7Hrq, r106_xn$setanchor$9Jrj, _r106_t0;
        _r106_t0 = this;
        r106_xn$setwidth$9Jrj = _r106_t0['set-width']['bind'](_r106_t0);
        r106_xn$assignunicode$7Hrq = _r106_t0['assign-unicode']['bind'](_r106_t0);
        r106_xn$startfrom$1aao = _r106_t0['start-from']['bind'](_r106_t0);
        r106_xn$lineto$5sIl = _r106_t0['line-to']['bind'](_r106_t0);
        r106_xn$curveto$1aao = _r106_t0['curve-to']['bind'](_r106_t0);
        r106_xn$cubicto$1aao = _r106_t0['cubic-to']['bind'](_r106_t0);
        r106_xn$putshapes$9Jrj = _r106_t0['put-shapes']['bind'](_r106_t0);
        r106_xn$reverselast$3qIs = _r106_t0['reverse-last']['bind'](_r106_t0);
        r106_include = _r106_t0['include']['bind'](_r106_t0);
        r106_xn$createstroke$7Hrq = _r106_t0['create-stroke']['bind'](_r106_t0);
        r106_xn$setanchor$9Jrj = _r106_t0['set-anchor']['bind'](_r106_t0);
        _r106_t0['gizmo'] = r0_globalTransform;
        _r106_t0['set-width'](r0_WIDTH);
        r106_xn$setwidth$9Jrj(r0_WIDTH);
        r106_xn$assignunicode$7Hrq('n');
        r106_include(r0_eMarks);
        r106_include(r0_glyphs['nbowl']);
        r106_xn$putshapes$9Jrj(r106_xn$createstroke$7Hrq()['start-from'](r0_SB, 0)['heads-to'](r0_UPWARD)['set-width'](0, r0_STROKE)['line-to'](r0_SB, r0_XH)['heads-to'](r0_UPWARD)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('h', function _r0_t55() {
        var r108_xn$setwidth$9Jrj, r108_xn$assignunicode$7Hrq, r108_xn$startfrom$1aao, r108_xn$lineto$5sIl, r108_xn$curveto$1aao, r108_xn$cubicto$1aao, r108_xn$putshapes$9Jrj, r108_xn$reverselast$3qIs, r108_include, r108_xn$createstroke$7Hrq, r108_xn$setanchor$9Jrj, _r108_t0;
        _r108_t0 = this;
        r108_xn$setwidth$9Jrj = _r108_t0['set-width']['bind'](_r108_t0);
        r108_xn$assignunicode$7Hrq = _r108_t0['assign-unicode']['bind'](_r108_t0);
        r108_xn$startfrom$1aao = _r108_t0['start-from']['bind'](_r108_t0);
        r108_xn$lineto$5sIl = _r108_t0['line-to']['bind'](_r108_t0);
        r108_xn$curveto$1aao = _r108_t0['curve-to']['bind'](_r108_t0);
        r108_xn$cubicto$1aao = _r108_t0['cubic-to']['bind'](_r108_t0);
        r108_xn$putshapes$9Jrj = _r108_t0['put-shapes']['bind'](_r108_t0);
        r108_xn$reverselast$3qIs = _r108_t0['reverse-last']['bind'](_r108_t0);
        r108_include = _r108_t0['include']['bind'](_r108_t0);
        r108_xn$createstroke$7Hrq = _r108_t0['create-stroke']['bind'](_r108_t0);
        r108_xn$setanchor$9Jrj = _r108_t0['set-anchor']['bind'](_r108_t0);
        _r108_t0['gizmo'] = r0_globalTransform;
        _r108_t0['set-width'](r0_WIDTH);
        r108_xn$setwidth$9Jrj(r0_WIDTH);
        r108_xn$assignunicode$7Hrq('h');
        r108_include(r0_bMarks);
        r108_include(r0_glyphs['nbowl']);
        r108_xn$putshapes$9Jrj(r108_xn$createstroke$7Hrq()['start-from'](r0_SB, 0)['heads-to'](r0_UPWARD)['set-width'](0, r0_STROKE)['line-to'](r0_SB, r0_CAP)['heads-to'](r0_UPWARD)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('m', function _r0_t56() {
        var r110_xn$setwidth$9Jrj, r110_xn$assignunicode$7Hrq, r110_xn$startfrom$1aao, r110_xn$lineto$5sIl, r110_xn$curveto$1aao, r110_xn$cubicto$1aao, r110_xn$putshapes$9Jrj, r110_xn$reverselast$3qIs, r110_include, r110_xn$createstroke$7Hrq, r110_xn$setanchor$9Jrj, r110_sw, r110_m1, r110_m2, _r110_t0;
        _r110_t0 = this;
        r110_xn$setwidth$9Jrj = _r110_t0['set-width']['bind'](_r110_t0);
        r110_xn$assignunicode$7Hrq = _r110_t0['assign-unicode']['bind'](_r110_t0);
        r110_xn$startfrom$1aao = _r110_t0['start-from']['bind'](_r110_t0);
        r110_xn$lineto$5sIl = _r110_t0['line-to']['bind'](_r110_t0);
        r110_xn$curveto$1aao = _r110_t0['curve-to']['bind'](_r110_t0);
        r110_xn$cubicto$1aao = _r110_t0['cubic-to']['bind'](_r110_t0);
        r110_xn$putshapes$9Jrj = _r110_t0['put-shapes']['bind'](_r110_t0);
        r110_xn$reverselast$3qIs = _r110_t0['reverse-last']['bind'](_r110_t0);
        r110_include = _r110_t0['include']['bind'](_r110_t0);
        r110_xn$createstroke$7Hrq = _r110_t0['create-stroke']['bind'](_r110_t0);
        r110_xn$setanchor$9Jrj = _r110_t0['set-anchor']['bind'](_r110_t0);
        _r110_t0['gizmo'] = r0_globalTransform;
        _r110_t0['set-width'](r0_WIDTH);
        r110_xn$setwidth$9Jrj(r0_WIDTH);
        r110_xn$assignunicode$7Hrq('m');
        r110_include(r0_eMarks);
        r110_sw = Math['min'](r0_STROKE, (r0_WIDTH - r0_SB * 2) * 0.24);
        r110_m1 = (r0_MIDDLE + r0_SB + r110_sw * 0.25) / 2;
        r110_m2 = r110_m1 + (r0_MIDDLE - r110_sw / 2 - r0_SB);
        r110_xn$putshapes$9Jrj(r110_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE - r110_sw / 2, 0)['set-width'](0, r110_sw)['heads-to'](r0_UPWARD)['line-to'](r0_MIDDLE - r110_sw / 2, r0_XH - r0_SMALLSMOOTHA)['arc-vh-to'](r110_m1, r0_XO - r0_STROKE)['set-width'](0, r0_STROKE)['heads-to'](r0_LEFTWARD)['arc-hv-to'](r0_SB + r110_sw * 0.75, r0_XH - r0_SMALLSMOOTHA)['heads-to'](r0_DOWNWARD)['set-width'](0, r110_sw * 0.4)['form-stroke']());
        r110_xn$putshapes$9Jrj(r110_xn$createstroke$7Hrq()['start-from'](r0_RIGHTSB - r110_sw, 0)['set-width'](0, r110_sw)['heads-to'](r0_UPWARD)['line-to'](r0_RIGHTSB - r110_sw, r0_XH - r0_SMALLSMOOTHA)['arc-vh-to'](r110_m2, r0_XO - r0_STROKE)['set-width'](0, r0_STROKE)['heads-to'](r0_LEFTWARD)['arc-hv-to'](r0_MIDDLE + r110_sw * 0.25, r0_XH - r0_SMALLSMOOTHA)['heads-to'](r0_DOWNWARD)['set-width'](0, r110_sw * 0.4)['form-stroke']());
        r110_xn$putshapes$9Jrj(r110_xn$createstroke$7Hrq()['start-from'](r0_SB, 0)['heads-to'](r0_UPWARD)['set-width'](0, r110_sw)['line-to'](r0_SB, r0_XH)['heads-to'](r0_UPWARD)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('dotlessi.straight', function _r0_t57() {
        var r112_xn$setwidth$9Jrj, r112_xn$assignunicode$7Hrq, r112_xn$startfrom$1aao, r112_xn$lineto$5sIl, r112_xn$curveto$1aao, r112_xn$cubicto$1aao, r112_xn$putshapes$9Jrj, r112_xn$reverselast$3qIs, r112_include, r112_xn$createstroke$7Hrq, r112_xn$setanchor$9Jrj, _r112_t0;
        _r112_t0 = this;
        r112_xn$setwidth$9Jrj = _r112_t0['set-width']['bind'](_r112_t0);
        r112_xn$assignunicode$7Hrq = _r112_t0['assign-unicode']['bind'](_r112_t0);
        r112_xn$startfrom$1aao = _r112_t0['start-from']['bind'](_r112_t0);
        r112_xn$lineto$5sIl = _r112_t0['line-to']['bind'](_r112_t0);
        r112_xn$curveto$1aao = _r112_t0['curve-to']['bind'](_r112_t0);
        r112_xn$cubicto$1aao = _r112_t0['cubic-to']['bind'](_r112_t0);
        r112_xn$putshapes$9Jrj = _r112_t0['put-shapes']['bind'](_r112_t0);
        r112_xn$reverselast$3qIs = _r112_t0['reverse-last']['bind'](_r112_t0);
        r112_include = _r112_t0['include']['bind'](_r112_t0);
        r112_xn$createstroke$7Hrq = _r112_t0['create-stroke']['bind'](_r112_t0);
        r112_xn$setanchor$9Jrj = _r112_t0['set-anchor']['bind'](_r112_t0);
        _r112_t0['gizmo'] = r0_globalTransform;
        _r112_t0['set-width'](r0_WIDTH);
        r112_xn$putshapes$9Jrj(r112_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE, 0)['heads-to'](r0_UPWARD)['set-width'](r0_HALFSTROKE, r0_HALFSTROKE)['line-to'](r0_MIDDLE, r0_XH)['heads-to'](r0_UPWARD)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('dotlessi.hooky', function _r0_t58() {
        var r114_xn$setwidth$9Jrj, r114_xn$assignunicode$7Hrq, r114_xn$startfrom$1aao, r114_xn$lineto$5sIl, r114_xn$curveto$1aao, r114_xn$cubicto$1aao, r114_xn$putshapes$9Jrj, r114_xn$reverselast$3qIs, r114_include, r114_xn$createstroke$7Hrq, r114_xn$setanchor$9Jrj, _r114_t0;
        _r114_t0 = this;
        r114_xn$setwidth$9Jrj = _r114_t0['set-width']['bind'](_r114_t0);
        r114_xn$assignunicode$7Hrq = _r114_t0['assign-unicode']['bind'](_r114_t0);
        r114_xn$startfrom$1aao = _r114_t0['start-from']['bind'](_r114_t0);
        r114_xn$lineto$5sIl = _r114_t0['line-to']['bind'](_r114_t0);
        r114_xn$curveto$1aao = _r114_t0['curve-to']['bind'](_r114_t0);
        r114_xn$cubicto$1aao = _r114_t0['cubic-to']['bind'](_r114_t0);
        r114_xn$putshapes$9Jrj = _r114_t0['put-shapes']['bind'](_r114_t0);
        r114_xn$reverselast$3qIs = _r114_t0['reverse-last']['bind'](_r114_t0);
        r114_include = _r114_t0['include']['bind'](_r114_t0);
        r114_xn$createstroke$7Hrq = _r114_t0['create-stroke']['bind'](_r114_t0);
        r114_xn$setanchor$9Jrj = _r114_t0['set-anchor']['bind'](_r114_t0);
        _r114_t0['gizmo'] = r0_globalTransform;
        _r114_t0['set-width'](r0_WIDTH);
        r114_include(r0_glyphs['dotlessi.straight']);
        r114_xn$putshapes$9Jrj(r0_leftwardTopSerif(r0_MIDDLE, r0_XH, r0_LONGSERIF));
        return void 0;
    });
    r0_xn$createglyph$7Hrq('dotlessi.zshaped', function _r0_t59() {
        var r116_xn$setwidth$9Jrj, r116_xn$assignunicode$7Hrq, r116_xn$startfrom$1aao, r116_xn$lineto$5sIl, r116_xn$curveto$1aao, r116_xn$cubicto$1aao, r116_xn$putshapes$9Jrj, r116_xn$reverselast$3qIs, r116_include, r116_xn$createstroke$7Hrq, r116_xn$setanchor$9Jrj, _r116_t0;
        _r116_t0 = this;
        r116_xn$setwidth$9Jrj = _r116_t0['set-width']['bind'](_r116_t0);
        r116_xn$assignunicode$7Hrq = _r116_t0['assign-unicode']['bind'](_r116_t0);
        r116_xn$startfrom$1aao = _r116_t0['start-from']['bind'](_r116_t0);
        r116_xn$lineto$5sIl = _r116_t0['line-to']['bind'](_r116_t0);
        r116_xn$curveto$1aao = _r116_t0['curve-to']['bind'](_r116_t0);
        r116_xn$cubicto$1aao = _r116_t0['cubic-to']['bind'](_r116_t0);
        r116_xn$putshapes$9Jrj = _r116_t0['put-shapes']['bind'](_r116_t0);
        r116_xn$reverselast$3qIs = _r116_t0['reverse-last']['bind'](_r116_t0);
        r116_include = _r116_t0['include']['bind'](_r116_t0);
        r116_xn$createstroke$7Hrq = _r116_t0['create-stroke']['bind'](_r116_t0);
        r116_xn$setanchor$9Jrj = _r116_t0['set-anchor']['bind'](_r116_t0);
        _r116_t0['gizmo'] = r0_globalTransform;
        _r116_t0['set-width'](r0_WIDTH);
        r116_include(r0_glyphs['dotlessi.hooky']);
        r116_xn$putshapes$9Jrj(r0_rightwardBottomSerif(r0_MIDDLE, 0, r0_LONGSERIF));
        return void 0;
    });
    r0_xn$createglyph$7Hrq('dotlessi.serifed', function _r0_t60() {
        var r118_xn$setwidth$9Jrj, r118_xn$assignunicode$7Hrq, r118_xn$startfrom$1aao, r118_xn$lineto$5sIl, r118_xn$curveto$1aao, r118_xn$cubicto$1aao, r118_xn$putshapes$9Jrj, r118_xn$reverselast$3qIs, r118_include, r118_xn$createstroke$7Hrq, r118_xn$setanchor$9Jrj, _r118_t0;
        _r118_t0 = this;
        r118_xn$setwidth$9Jrj = _r118_t0['set-width']['bind'](_r118_t0);
        r118_xn$assignunicode$7Hrq = _r118_t0['assign-unicode']['bind'](_r118_t0);
        r118_xn$startfrom$1aao = _r118_t0['start-from']['bind'](_r118_t0);
        r118_xn$lineto$5sIl = _r118_t0['line-to']['bind'](_r118_t0);
        r118_xn$curveto$1aao = _r118_t0['curve-to']['bind'](_r118_t0);
        r118_xn$cubicto$1aao = _r118_t0['cubic-to']['bind'](_r118_t0);
        r118_xn$putshapes$9Jrj = _r118_t0['put-shapes']['bind'](_r118_t0);
        r118_xn$reverselast$3qIs = _r118_t0['reverse-last']['bind'](_r118_t0);
        r118_include = _r118_t0['include']['bind'](_r118_t0);
        r118_xn$createstroke$7Hrq = _r118_t0['create-stroke']['bind'](_r118_t0);
        r118_xn$setanchor$9Jrj = _r118_t0['set-anchor']['bind'](_r118_t0);
        _r118_t0['gizmo'] = r0_globalTransform;
        _r118_t0['set-width'](r0_WIDTH);
        r118_include(r0_glyphs['dotlessi.zshaped']);
        r118_xn$putshapes$9Jrj(r0_leftwardBottomSerif(r0_MIDDLE, 0, r0_LONGSERIF));
        return void 0;
    });
    r0_xn$createglyph$7Hrq('dotlessi', function _r0_t61() {
        var r120_xn$setwidth$9Jrj, r120_xn$assignunicode$7Hrq, r120_xn$startfrom$1aao, r120_xn$lineto$5sIl, r120_xn$curveto$1aao, r120_xn$cubicto$1aao, r120_xn$putshapes$9Jrj, r120_xn$reverselast$3qIs, r120_include, r120_xn$createstroke$7Hrq, r120_xn$setanchor$9Jrj, r120_otherwise, _r120_t0, _r120_t1, _r120_t2, _r120_t3, _r120_t4, _r120_t5, _r120_t6, _r120_t7, _r120_t8;
        _r120_t1 = this;
        r120_xn$setwidth$9Jrj = _r120_t1['set-width']['bind'](_r120_t1);
        r120_xn$assignunicode$7Hrq = _r120_t1['assign-unicode']['bind'](_r120_t1);
        r120_xn$startfrom$1aao = _r120_t1['start-from']['bind'](_r120_t1);
        r120_xn$lineto$5sIl = _r120_t1['line-to']['bind'](_r120_t1);
        r120_xn$curveto$1aao = _r120_t1['curve-to']['bind'](_r120_t1);
        r120_xn$cubicto$1aao = _r120_t1['cubic-to']['bind'](_r120_t1);
        r120_xn$putshapes$9Jrj = _r120_t1['put-shapes']['bind'](_r120_t1);
        r120_xn$reverselast$3qIs = _r120_t1['reverse-last']['bind'](_r120_t1);
        r120_include = _r120_t1['include']['bind'](_r120_t1);
        r120_xn$createstroke$7Hrq = _r120_t1['create-stroke']['bind'](_r120_t1);
        r120_xn$setanchor$9Jrj = _r120_t1['set-anchor']['bind'](_r120_t1);
        _r120_t1['gizmo'] = r0_globalTransform;
        _r120_t1['set-width'](r0_WIDTH);
        r120_xn$setwidth$9Jrj(r0_WIDTH);
        r120_xn$assignunicode$7Hrq(305);
        r120_include(r0_eMarks);
        _r120_t2 = r120_include;
        _r120_t3 = r0_glyphs;
        _r120_t0 = r0_variantSelector['zero'];
        if ('straight' === _r120_t0) {
            _r120_t4 = 'dotlessi.straight';
        } else {
            if ('hooky' === _r120_t0) {
                _r120_t5 = 'dotlessi.hooky';
            } else {
                if ('zshaped' === _r120_t0) {
                    _r120_t6 = 'dotlessi.zshaped';
                } else {
                    if ('serifed' === _r120_t0) {
                        _r120_t7 = 'dotlessi.serifed';
                    } else {
                        r120_otherwise = _r120_t0;
                        _r120_t7 = 'dotlessi.serifed';
                    }
                    _r120_t6 = _r120_t7;
                }
                _r120_t5 = _r120_t6;
            }
            _r120_t4 = _r120_t5;
        }
        _r120_t8 = _r120_t3[_r120_t4];
        _r120_t2(_r120_t8);
        return void 0;
    });
    r0_xn$createglyph$7Hrq('dotaccent', function _r0_t62() {
        var r122_xn$setwidth$9Jrj, r122_xn$assignunicode$7Hrq, r122_xn$startfrom$1aao, r122_xn$lineto$5sIl, r122_xn$curveto$1aao, r122_xn$cubicto$1aao, r122_xn$putshapes$9Jrj, r122_xn$reverselast$3qIs, r122_include, r122_xn$createstroke$7Hrq, r122_xn$setanchor$9Jrj, _r122_t0;
        _r122_t0 = this;
        r122_xn$setwidth$9Jrj = _r122_t0['set-width']['bind'](_r122_t0);
        r122_xn$assignunicode$7Hrq = _r122_t0['assign-unicode']['bind'](_r122_t0);
        r122_xn$startfrom$1aao = _r122_t0['start-from']['bind'](_r122_t0);
        r122_xn$lineto$5sIl = _r122_t0['line-to']['bind'](_r122_t0);
        r122_xn$curveto$1aao = _r122_t0['curve-to']['bind'](_r122_t0);
        r122_xn$cubicto$1aao = _r122_t0['cubic-to']['bind'](_r122_t0);
        r122_xn$putshapes$9Jrj = _r122_t0['put-shapes']['bind'](_r122_t0);
        r122_xn$reverselast$3qIs = _r122_t0['reverse-last']['bind'](_r122_t0);
        r122_include = _r122_t0['include']['bind'](_r122_t0);
        r122_xn$createstroke$7Hrq = _r122_t0['create-stroke']['bind'](_r122_t0);
        r122_xn$setanchor$9Jrj = _r122_t0['set-anchor']['bind'](_r122_t0);
        _r122_t0['gizmo'] = r0_globalTransform;
        _r122_t0['set-width'](r0_WIDTH);
        r122_xn$setwidth$9Jrj(r0_WIDTH);
        r122_xn$setanchor$9Jrj('above', r0_MARK, r0_MIDDLE, r0_XH, r0_MIDDLE, r0_XH + r0_ACCENT);
        r122_xn$putshapes$9Jrj([r0_Ring(r0_XH + r0_ACCENT + r0_DOTRADIUS, r0_XH + r0_ACCENT - r0_DOTRADIUS, r0_MIDDLE - r0_DOTRADIUS, r0_MIDDLE + r0_DOTRADIUS)]);
        return void 0;
    });
    r0_xn$createglyph$7Hrq('i', function _r0_t63() {
        var r124_xn$setwidth$9Jrj, r124_xn$assignunicode$7Hrq, r124_xn$startfrom$1aao, r124_xn$lineto$5sIl, r124_xn$curveto$1aao, r124_xn$cubicto$1aao, r124_xn$putshapes$9Jrj, r124_xn$reverselast$3qIs, r124_include, r124_xn$createstroke$7Hrq, r124_xn$setanchor$9Jrj, _r124_t0;
        _r124_t0 = this;
        r124_xn$setwidth$9Jrj = _r124_t0['set-width']['bind'](_r124_t0);
        r124_xn$assignunicode$7Hrq = _r124_t0['assign-unicode']['bind'](_r124_t0);
        r124_xn$startfrom$1aao = _r124_t0['start-from']['bind'](_r124_t0);
        r124_xn$lineto$5sIl = _r124_t0['line-to']['bind'](_r124_t0);
        r124_xn$curveto$1aao = _r124_t0['curve-to']['bind'](_r124_t0);
        r124_xn$cubicto$1aao = _r124_t0['cubic-to']['bind'](_r124_t0);
        r124_xn$putshapes$9Jrj = _r124_t0['put-shapes']['bind'](_r124_t0);
        r124_xn$reverselast$3qIs = _r124_t0['reverse-last']['bind'](_r124_t0);
        r124_include = _r124_t0['include']['bind'](_r124_t0);
        r124_xn$createstroke$7Hrq = _r124_t0['create-stroke']['bind'](_r124_t0);
        r124_xn$setanchor$9Jrj = _r124_t0['set-anchor']['bind'](_r124_t0);
        _r124_t0['gizmo'] = r0_globalTransform;
        _r124_t0['set-width'](r0_WIDTH);
        r124_xn$setwidth$9Jrj(r0_WIDTH);
        r124_xn$assignunicode$7Hrq('i');
        r124_include(r0_glyphs['dotlessi'], r0_BASE);
        r124_include(r0_glyphs['dotaccent']);
        return void 0;
    });
    r0_xn$createglyph$7Hrq('dotlessj.straight', function _r0_t64() {
        var r126_xn$setwidth$9Jrj, r126_xn$assignunicode$7Hrq, r126_xn$startfrom$1aao, r126_xn$lineto$5sIl, r126_xn$curveto$1aao, r126_xn$cubicto$1aao, r126_xn$putshapes$9Jrj, r126_xn$reverselast$3qIs, r126_include, r126_xn$createstroke$7Hrq, r126_xn$setanchor$9Jrj, _r126_t0;
        _r126_t0 = this;
        r126_xn$setwidth$9Jrj = _r126_t0['set-width']['bind'](_r126_t0);
        r126_xn$assignunicode$7Hrq = _r126_t0['assign-unicode']['bind'](_r126_t0);
        r126_xn$startfrom$1aao = _r126_t0['start-from']['bind'](_r126_t0);
        r126_xn$lineto$5sIl = _r126_t0['line-to']['bind'](_r126_t0);
        r126_xn$curveto$1aao = _r126_t0['curve-to']['bind'](_r126_t0);
        r126_xn$cubicto$1aao = _r126_t0['cubic-to']['bind'](_r126_t0);
        r126_xn$putshapes$9Jrj = _r126_t0['put-shapes']['bind'](_r126_t0);
        r126_xn$reverselast$3qIs = _r126_t0['reverse-last']['bind'](_r126_t0);
        r126_include = _r126_t0['include']['bind'](_r126_t0);
        r126_xn$createstroke$7Hrq = _r126_t0['create-stroke']['bind'](_r126_t0);
        r126_xn$setanchor$9Jrj = _r126_t0['set-anchor']['bind'](_r126_t0);
        _r126_t0['gizmo'] = r0_globalTransform;
        _r126_t0['set-width'](r0_WIDTH);
        r126_xn$putshapes$9Jrj(r126_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE + r0_HALFSTROKE, r0_XH)['heads-to'](r0_DOWNWARD)['set-width'](r0_HALFSTROKE, r0_HALFSTROKE)['line-to'](r0_MIDDLE + r0_HALFSTROKE, 0)['arc-vh-to'](r0_MIDDLE + r0_DESCENDER, r0_DESCENDER + r0_HALFSTROKE)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('dotlessj.serifed', function _r0_t65() {
        var r128_xn$setwidth$9Jrj, r128_xn$assignunicode$7Hrq, r128_xn$startfrom$1aao, r128_xn$lineto$5sIl, r128_xn$curveto$1aao, r128_xn$cubicto$1aao, r128_xn$putshapes$9Jrj, r128_xn$reverselast$3qIs, r128_include, r128_xn$createstroke$7Hrq, r128_xn$setanchor$9Jrj, _r128_t0;
        _r128_t0 = this;
        r128_xn$setwidth$9Jrj = _r128_t0['set-width']['bind'](_r128_t0);
        r128_xn$assignunicode$7Hrq = _r128_t0['assign-unicode']['bind'](_r128_t0);
        r128_xn$startfrom$1aao = _r128_t0['start-from']['bind'](_r128_t0);
        r128_xn$lineto$5sIl = _r128_t0['line-to']['bind'](_r128_t0);
        r128_xn$curveto$1aao = _r128_t0['curve-to']['bind'](_r128_t0);
        r128_xn$cubicto$1aao = _r128_t0['cubic-to']['bind'](_r128_t0);
        r128_xn$putshapes$9Jrj = _r128_t0['put-shapes']['bind'](_r128_t0);
        r128_xn$reverselast$3qIs = _r128_t0['reverse-last']['bind'](_r128_t0);
        r128_include = _r128_t0['include']['bind'](_r128_t0);
        r128_xn$createstroke$7Hrq = _r128_t0['create-stroke']['bind'](_r128_t0);
        r128_xn$setanchor$9Jrj = _r128_t0['set-anchor']['bind'](_r128_t0);
        _r128_t0['gizmo'] = r0_globalTransform;
        _r128_t0['set-width'](r0_WIDTH);
        r128_include(r0_glyphs['dotlessj.straight']);
        r128_xn$putshapes$9Jrj(r0_leftwardTopSerif(r0_MIDDLE + r0_HALFSTROKE, r0_XH, r0_LONGSERIF));
        return void 0;
    });
    r0_xn$createglyph$7Hrq('dotlessj', function _r0_t66() {
        var r130_xn$setwidth$9Jrj, r130_xn$assignunicode$7Hrq, r130_xn$startfrom$1aao, r130_xn$lineto$5sIl, r130_xn$curveto$1aao, r130_xn$cubicto$1aao, r130_xn$putshapes$9Jrj, r130_xn$reverselast$3qIs, r130_include, r130_xn$createstroke$7Hrq, r130_xn$setanchor$9Jrj, _r130_t0;
        _r130_t0 = this;
        r130_xn$setwidth$9Jrj = _r130_t0['set-width']['bind'](_r130_t0);
        r130_xn$assignunicode$7Hrq = _r130_t0['assign-unicode']['bind'](_r130_t0);
        r130_xn$startfrom$1aao = _r130_t0['start-from']['bind'](_r130_t0);
        r130_xn$lineto$5sIl = _r130_t0['line-to']['bind'](_r130_t0);
        r130_xn$curveto$1aao = _r130_t0['curve-to']['bind'](_r130_t0);
        r130_xn$cubicto$1aao = _r130_t0['cubic-to']['bind'](_r130_t0);
        r130_xn$putshapes$9Jrj = _r130_t0['put-shapes']['bind'](_r130_t0);
        r130_xn$reverselast$3qIs = _r130_t0['reverse-last']['bind'](_r130_t0);
        r130_include = _r130_t0['include']['bind'](_r130_t0);
        r130_xn$createstroke$7Hrq = _r130_t0['create-stroke']['bind'](_r130_t0);
        r130_xn$setanchor$9Jrj = _r130_t0['set-anchor']['bind'](_r130_t0);
        _r130_t0['gizmo'] = r0_globalTransform;
        _r130_t0['set-width'](r0_WIDTH);
        r130_xn$setwidth$9Jrj(r0_WIDTH);
        r130_xn$setanchor$9Jrj('above', r0_BASE, r0_MIDDLE + r0_HALFSTROKE, r0_XH);
        r130_xn$assignunicode$7Hrq(567);
        r130_include(r0_glyphs['dotlessj.serifed']);
        return void 0;
    });
    r0_xn$createglyph$7Hrq('j', function _r0_t67() {
        var r132_xn$setwidth$9Jrj, r132_xn$assignunicode$7Hrq, r132_xn$startfrom$1aao, r132_xn$lineto$5sIl, r132_xn$curveto$1aao, r132_xn$cubicto$1aao, r132_xn$putshapes$9Jrj, r132_xn$reverselast$3qIs, r132_include, r132_xn$createstroke$7Hrq, r132_xn$setanchor$9Jrj, _r132_t0;
        _r132_t0 = this;
        r132_xn$setwidth$9Jrj = _r132_t0['set-width']['bind'](_r132_t0);
        r132_xn$assignunicode$7Hrq = _r132_t0['assign-unicode']['bind'](_r132_t0);
        r132_xn$startfrom$1aao = _r132_t0['start-from']['bind'](_r132_t0);
        r132_xn$lineto$5sIl = _r132_t0['line-to']['bind'](_r132_t0);
        r132_xn$curveto$1aao = _r132_t0['curve-to']['bind'](_r132_t0);
        r132_xn$cubicto$1aao = _r132_t0['cubic-to']['bind'](_r132_t0);
        r132_xn$putshapes$9Jrj = _r132_t0['put-shapes']['bind'](_r132_t0);
        r132_xn$reverselast$3qIs = _r132_t0['reverse-last']['bind'](_r132_t0);
        r132_include = _r132_t0['include']['bind'](_r132_t0);
        r132_xn$createstroke$7Hrq = _r132_t0['create-stroke']['bind'](_r132_t0);
        r132_xn$setanchor$9Jrj = _r132_t0['set-anchor']['bind'](_r132_t0);
        _r132_t0['gizmo'] = r0_globalTransform;
        _r132_t0['set-width'](r0_WIDTH);
        r132_xn$setwidth$9Jrj(r0_WIDTH);
        r132_xn$assignunicode$7Hrq('j');
        r132_include(r0_glyphs['dotlessj'], r0_BASE);
        r132_include(r0_glyphs['dotaccent']);
        return void 0;
    });
    r0_xn$createglyph$7Hrq('l.straight', function _r0_t68() {
        var r134_xn$setwidth$9Jrj, r134_xn$assignunicode$7Hrq, r134_xn$startfrom$1aao, r134_xn$lineto$5sIl, r134_xn$curveto$1aao, r134_xn$cubicto$1aao, r134_xn$putshapes$9Jrj, r134_xn$reverselast$3qIs, r134_include, r134_xn$createstroke$7Hrq, r134_xn$setanchor$9Jrj, _r134_t0;
        _r134_t0 = this;
        r134_xn$setwidth$9Jrj = _r134_t0['set-width']['bind'](_r134_t0);
        r134_xn$assignunicode$7Hrq = _r134_t0['assign-unicode']['bind'](_r134_t0);
        r134_xn$startfrom$1aao = _r134_t0['start-from']['bind'](_r134_t0);
        r134_xn$lineto$5sIl = _r134_t0['line-to']['bind'](_r134_t0);
        r134_xn$curveto$1aao = _r134_t0['curve-to']['bind'](_r134_t0);
        r134_xn$cubicto$1aao = _r134_t0['cubic-to']['bind'](_r134_t0);
        r134_xn$putshapes$9Jrj = _r134_t0['put-shapes']['bind'](_r134_t0);
        r134_xn$reverselast$3qIs = _r134_t0['reverse-last']['bind'](_r134_t0);
        r134_include = _r134_t0['include']['bind'](_r134_t0);
        r134_xn$createstroke$7Hrq = _r134_t0['create-stroke']['bind'](_r134_t0);
        r134_xn$setanchor$9Jrj = _r134_t0['set-anchor']['bind'](_r134_t0);
        _r134_t0['gizmo'] = r0_globalTransform;
        _r134_t0['set-width'](r0_WIDTH);
        r134_xn$putshapes$9Jrj(r134_xn$createstroke$7Hrq()['start-from'](r0_MIDDLE, 0)['heads-to'](r0_UPWARD)['set-width'](r0_HALFSTROKE, r0_HALFSTROKE)['line-to'](r0_MIDDLE, r0_CAP)['heads-to'](r0_UPWARD)['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('l.hooky', function _r0_t69() {
        var r136_xn$setwidth$9Jrj, r136_xn$assignunicode$7Hrq, r136_xn$startfrom$1aao, r136_xn$lineto$5sIl, r136_xn$curveto$1aao, r136_xn$cubicto$1aao, r136_xn$putshapes$9Jrj, r136_xn$reverselast$3qIs, r136_include, r136_xn$createstroke$7Hrq, r136_xn$setanchor$9Jrj, _r136_t0;
        _r136_t0 = this;
        r136_xn$setwidth$9Jrj = _r136_t0['set-width']['bind'](_r136_t0);
        r136_xn$assignunicode$7Hrq = _r136_t0['assign-unicode']['bind'](_r136_t0);
        r136_xn$startfrom$1aao = _r136_t0['start-from']['bind'](_r136_t0);
        r136_xn$lineto$5sIl = _r136_t0['line-to']['bind'](_r136_t0);
        r136_xn$curveto$1aao = _r136_t0['curve-to']['bind'](_r136_t0);
        r136_xn$cubicto$1aao = _r136_t0['cubic-to']['bind'](_r136_t0);
        r136_xn$putshapes$9Jrj = _r136_t0['put-shapes']['bind'](_r136_t0);
        r136_xn$reverselast$3qIs = _r136_t0['reverse-last']['bind'](_r136_t0);
        r136_include = _r136_t0['include']['bind'](_r136_t0);
        r136_xn$createstroke$7Hrq = _r136_t0['create-stroke']['bind'](_r136_t0);
        r136_xn$setanchor$9Jrj = _r136_t0['set-anchor']['bind'](_r136_t0);
        _r136_t0['gizmo'] = r0_globalTransform;
        _r136_t0['set-width'](r0_WIDTH);
        r136_include(r0_glyphs['l.straight']);
        r136_xn$putshapes$9Jrj(r0_leftwardTopSerif(r0_MIDDLE, r0_CAP, r0_LONGSERIF));
        return void 0;
    });
    r0_xn$createglyph$7Hrq('l.zshaped', function _r0_t70() {
        var r138_xn$setwidth$9Jrj, r138_xn$assignunicode$7Hrq, r138_xn$startfrom$1aao, r138_xn$lineto$5sIl, r138_xn$curveto$1aao, r138_xn$cubicto$1aao, r138_xn$putshapes$9Jrj, r138_xn$reverselast$3qIs, r138_include, r138_xn$createstroke$7Hrq, r138_xn$setanchor$9Jrj, _r138_t0;
        _r138_t0 = this;
        r138_xn$setwidth$9Jrj = _r138_t0['set-width']['bind'](_r138_t0);
        r138_xn$assignunicode$7Hrq = _r138_t0['assign-unicode']['bind'](_r138_t0);
        r138_xn$startfrom$1aao = _r138_t0['start-from']['bind'](_r138_t0);
        r138_xn$lineto$5sIl = _r138_t0['line-to']['bind'](_r138_t0);
        r138_xn$curveto$1aao = _r138_t0['curve-to']['bind'](_r138_t0);
        r138_xn$cubicto$1aao = _r138_t0['cubic-to']['bind'](_r138_t0);
        r138_xn$putshapes$9Jrj = _r138_t0['put-shapes']['bind'](_r138_t0);
        r138_xn$reverselast$3qIs = _r138_t0['reverse-last']['bind'](_r138_t0);
        r138_include = _r138_t0['include']['bind'](_r138_t0);
        r138_xn$createstroke$7Hrq = _r138_t0['create-stroke']['bind'](_r138_t0);
        r138_xn$setanchor$9Jrj = _r138_t0['set-anchor']['bind'](_r138_t0);
        _r138_t0['gizmo'] = r0_globalTransform;
        _r138_t0['set-width'](r0_WIDTH);
        r138_include(r0_glyphs['l.hooky']);
        r138_xn$putshapes$9Jrj(r0_rightwardBottomSerif(r0_MIDDLE, 0, r0_LONGSERIF));
        return void 0;
    });
    r0_xn$createglyph$7Hrq('l.serifed', function _r0_t71() {
        var r140_xn$setwidth$9Jrj, r140_xn$assignunicode$7Hrq, r140_xn$startfrom$1aao, r140_xn$lineto$5sIl, r140_xn$curveto$1aao, r140_xn$cubicto$1aao, r140_xn$putshapes$9Jrj, r140_xn$reverselast$3qIs, r140_include, r140_xn$createstroke$7Hrq, r140_xn$setanchor$9Jrj, _r140_t0;
        _r140_t0 = this;
        r140_xn$setwidth$9Jrj = _r140_t0['set-width']['bind'](_r140_t0);
        r140_xn$assignunicode$7Hrq = _r140_t0['assign-unicode']['bind'](_r140_t0);
        r140_xn$startfrom$1aao = _r140_t0['start-from']['bind'](_r140_t0);
        r140_xn$lineto$5sIl = _r140_t0['line-to']['bind'](_r140_t0);
        r140_xn$curveto$1aao = _r140_t0['curve-to']['bind'](_r140_t0);
        r140_xn$cubicto$1aao = _r140_t0['cubic-to']['bind'](_r140_t0);
        r140_xn$putshapes$9Jrj = _r140_t0['put-shapes']['bind'](_r140_t0);
        r140_xn$reverselast$3qIs = _r140_t0['reverse-last']['bind'](_r140_t0);
        r140_include = _r140_t0['include']['bind'](_r140_t0);
        r140_xn$createstroke$7Hrq = _r140_t0['create-stroke']['bind'](_r140_t0);
        r140_xn$setanchor$9Jrj = _r140_t0['set-anchor']['bind'](_r140_t0);
        _r140_t0['gizmo'] = r0_globalTransform;
        _r140_t0['set-width'](r0_WIDTH);
        r140_include(r0_glyphs['l.zshaped']);
        r140_xn$putshapes$9Jrj(r0_leftwardBottomSerif(r0_MIDDLE, 0, r0_LONGSERIF));
        return void 0;
    });
    r0_xn$createglyph$7Hrq('l', function _r0_t72() {
        var r142_xn$setwidth$9Jrj, r142_xn$assignunicode$7Hrq, r142_xn$startfrom$1aao, r142_xn$lineto$5sIl, r142_xn$curveto$1aao, r142_xn$cubicto$1aao, r142_xn$putshapes$9Jrj, r142_xn$reverselast$3qIs, r142_include, r142_xn$createstroke$7Hrq, r142_xn$setanchor$9Jrj, r142_otherwise, _r142_t0, _r142_t1, _r142_t2, _r142_t3, _r142_t4, _r142_t5, _r142_t6, _r142_t7, _r142_t8;
        _r142_t1 = this;
        r142_xn$setwidth$9Jrj = _r142_t1['set-width']['bind'](_r142_t1);
        r142_xn$assignunicode$7Hrq = _r142_t1['assign-unicode']['bind'](_r142_t1);
        r142_xn$startfrom$1aao = _r142_t1['start-from']['bind'](_r142_t1);
        r142_xn$lineto$5sIl = _r142_t1['line-to']['bind'](_r142_t1);
        r142_xn$curveto$1aao = _r142_t1['curve-to']['bind'](_r142_t1);
        r142_xn$cubicto$1aao = _r142_t1['cubic-to']['bind'](_r142_t1);
        r142_xn$putshapes$9Jrj = _r142_t1['put-shapes']['bind'](_r142_t1);
        r142_xn$reverselast$3qIs = _r142_t1['reverse-last']['bind'](_r142_t1);
        r142_include = _r142_t1['include']['bind'](_r142_t1);
        r142_xn$createstroke$7Hrq = _r142_t1['create-stroke']['bind'](_r142_t1);
        r142_xn$setanchor$9Jrj = _r142_t1['set-anchor']['bind'](_r142_t1);
        _r142_t1['gizmo'] = r0_globalTransform;
        _r142_t1['set-width'](r0_WIDTH);
        r142_xn$setwidth$9Jrj(r0_WIDTH);
        r142_xn$assignunicode$7Hrq('l');
        r142_include(r0_bMarks);
        _r142_t2 = r142_include;
        _r142_t3 = r0_glyphs;
        _r142_t0 = r0_variantSelector['zero'];
        if ('straight' === _r142_t0) {
            _r142_t4 = 'l.straight';
        } else {
            if ('hooky' === _r142_t0) {
                _r142_t5 = 'l.hooky';
            } else {
                if ('zshaped' === _r142_t0) {
                    _r142_t6 = 'l.zshaped';
                } else {
                    if ('serifed' === _r142_t0) {
                        _r142_t7 = 'l.serifed';
                    } else {
                        r142_otherwise = _r142_t0;
                        _r142_t7 = 'l.serifed';
                    }
                    _r142_t6 = _r142_t7;
                }
                _r142_t5 = _r142_t6;
            }
            _r142_t4 = _r142_t5;
        }
        _r142_t8 = _r142_t3[_r142_t4];
        _r142_t2(_r142_t8);
        return void 0;
    });
    r0_xn$createglyph$7Hrq('x', function _r0_t73() {
        var r144_xn$setwidth$9Jrj, r144_xn$assignunicode$7Hrq, r144_xn$startfrom$1aao, r144_xn$lineto$5sIl, r144_xn$curveto$1aao, r144_xn$cubicto$1aao, r144_xn$putshapes$9Jrj, r144_xn$reverselast$3qIs, r144_include, r144_xn$createstroke$7Hrq, r144_xn$setanchor$9Jrj, r144_TURN, r144_barone, r144_bartwo, _r144_t0;
        _r144_t0 = this;
        r144_xn$setwidth$9Jrj = _r144_t0['set-width']['bind'](_r144_t0);
        r144_xn$assignunicode$7Hrq = _r144_t0['assign-unicode']['bind'](_r144_t0);
        r144_xn$startfrom$1aao = _r144_t0['start-from']['bind'](_r144_t0);
        r144_xn$lineto$5sIl = _r144_t0['line-to']['bind'](_r144_t0);
        r144_xn$curveto$1aao = _r144_t0['curve-to']['bind'](_r144_t0);
        r144_xn$cubicto$1aao = _r144_t0['cubic-to']['bind'](_r144_t0);
        r144_xn$putshapes$9Jrj = _r144_t0['put-shapes']['bind'](_r144_t0);
        r144_xn$reverselast$3qIs = _r144_t0['reverse-last']['bind'](_r144_t0);
        r144_include = _r144_t0['include']['bind'](_r144_t0);
        r144_xn$createstroke$7Hrq = _r144_t0['create-stroke']['bind'](_r144_t0);
        r144_xn$setanchor$9Jrj = _r144_t0['set-anchor']['bind'](_r144_t0);
        _r144_t0['gizmo'] = r0_globalTransform;
        _r144_t0['set-width'](r0_WIDTH);
        r144_xn$setwidth$9Jrj(r0_WIDTH);
        r144_xn$assignunicode$7Hrq('x');
        r144_include(r0_eMarks);
        r144_TURN = r0_XH * 0.1;
        r144_barone = r144_xn$createstroke$7Hrq()['start-from'](r0_SB + r0_HALFSTROKE + r0_O, 0)['heads-to'](r0_UPWARD)['set-width'](r0_HALFSTROKE, r0_HALFSTROKE)['cubic-to'](r0_SB + r0_HALFSTROKE + r0_O, r144_TURN + 0.17 * (r0_XH - r144_TURN), r0_RIGHTSB - r0_HALFSTROKE - r0_O, r0_XH - r144_TURN - 0.17 * (r0_XH - r144_TURN), r0_RIGHTSB - r0_HALFSTROKE - r0_O, r0_XH)['heads-to'](r0_UPWARD);
        r144_bartwo = r144_xn$createstroke$7Hrq()['start-from'](r0_RIGHTSB - r0_HALFSTROKE - r0_O, 0)['heads-to'](r0_UPWARD)['set-width'](r0_HALFSTROKE, r0_HALFSTROKE)['cubic-to'](r0_RIGHTSB - r0_HALFSTROKE - r0_O, r144_TURN + 0.17 * (r0_XH - r144_TURN), r0_SB + r0_HALFSTROKE + r0_O, r0_XH - r144_TURN - 0.17 * (r0_XH - r144_TURN), r0_SB + r0_HALFSTROKE + r0_O, r0_XH)['heads-to'](r0_UPWARD);
        r144_xn$putshapes$9Jrj(r144_barone['form-stroke']());
        r144_xn$putshapes$9Jrj(r144_bartwo['form-stroke']());
        return void 0;
    });
    r0_xn$createglyph$7Hrq('s', function _r0_t74() {
        var r146_xn$setwidth$9Jrj, r146_xn$assignunicode$7Hrq, r146_xn$startfrom$1aao, r146_xn$lineto$5sIl, r146_xn$curveto$1aao, r146_xn$cubicto$1aao, r146_xn$putshapes$9Jrj, r146_xn$reverselast$3qIs, r146_include, r146_xn$createstroke$7Hrq, r146_xn$setanchor$9Jrj, r146_slope, r146_expand, r146_coexpand, r146_ssmootha, r146_bowltop, r146_strokemiddle, r146_bowlbottom, _r146_t0;
        _r146_t0 = this;
        r146_xn$setwidth$9Jrj = _r146_t0['set-width']['bind'](_r146_t0);
        r146_xn$assignunicode$7Hrq = _r146_t0['assign-unicode']['bind'](_r146_t0);
        r146_xn$startfrom$1aao = _r146_t0['start-from']['bind'](_r146_t0);
        r146_xn$lineto$5sIl = _r146_t0['line-to']['bind'](_r146_t0);
        r146_xn$curveto$1aao = _r146_t0['curve-to']['bind'](_r146_t0);
        r146_xn$cubicto$1aao = _r146_t0['cubic-to']['bind'](_r146_t0);
        r146_xn$putshapes$9Jrj = _r146_t0['put-shapes']['bind'](_r146_t0);
        r146_xn$reverselast$3qIs = _r146_t0['reverse-last']['bind'](_r146_t0);
        r146_include = _r146_t0['include']['bind'](_r146_t0);
        r146_xn$createstroke$7Hrq = _r146_t0['create-stroke']['bind'](_r146_t0);
        r146_xn$setanchor$9Jrj = _r146_t0['set-anchor']['bind'](_r146_t0);
        _r146_t0['gizmo'] = r0_globalTransform;
        _r146_t0['set-width'](r0_WIDTH);
        r146_xn$setwidth$9Jrj(r0_WIDTH);
        r146_xn$assignunicode$7Hrq('s');
        r146_include(r0_eMarks);
        r146_slope = 0.015;
        r146_expand = 0.175;
        r146_coexpand = (1 - r146_expand) / 2;
        r146_ssmootha = r0_SMOOTHA * 0.87;
        r146_bowltop = r146_xn$createstroke$7Hrq();
        r146_bowltop['start-from'](r0_RIGHTSB - r0_OXHOOK, r0_XH - r0_SHOOK)['set-width'](r0_STROKE, 0)['curve-to'](r0_MIDDLE + r0_KAPPA_AHOOK * (r0_MIDDLE - r0_para['sb']), r0_XO, r0_MIDDLE, r0_XO)['heads-to'](r0_LEFTWARD)['arc-hv-to'](r0_SB, r0_XH - r146_ssmootha);
        r146_strokemiddle = r146_xn$createstroke$7Hrq();
        r146_strokemiddle['start-from'](r0_SB + r0_STROKE / 2, r0_XH - r146_ssmootha)['set-width'](r0_STROKE / 2, r0_STROKE / 2)['curve-to'](r0_SB + r0_STROKE / 2, (0.5 + r146_slope) * r0_XH + 2 * r146_slope * r0_XH / (r146_expand * r0_WIDTH) * (r146_coexpand * r0_WIDTH - r0_SB - r0_STROKE / 2), r146_coexpand * r0_WIDTH, (0.5 + r146_slope) * r0_XH)['line-to']((1 - r146_coexpand) * r0_WIDTH, (0.5 - r146_slope) * r0_XH)['curve-to'](r0_RIGHTSB - r0_STROKE / 2, (0.5 - r146_slope) * r0_XH - 2 * r146_slope * r0_XH / (r146_expand * r0_WIDTH) * (r146_coexpand * r0_WIDTH - r0_SB - r0_STROKE / 2), r0_RIGHTSB - r0_STROKE / 2, r146_ssmootha);
        r146_bowlbottom = r146_xn$createstroke$7Hrq();
        r146_bowlbottom['start-from'](r0_RIGHTSB, r146_ssmootha)['set-width'](0, r0_STROKE)['arc-vh-to'](r0_MIDDLE, r0_O)['heads-to'](r0_LEFTWARD)['curve-to'](r0_MIDDLE - r0_KAPPA_AHOOK * (r0_MIDDLE - r0_para['sb']), r0_O, r0_SB + r0_OXHOOK, r0_SHOOK);
        r146_xn$putshapes$9Jrj(r146_bowltop['form-stroke']());
        r146_xn$putshapes$9Jrj(r146_strokemiddle['form-stroke']());
        r146_xn$putshapes$9Jrj(r146_bowlbottom['form-stroke']());
        return void 0;
    });
    exports['font'] = r0_font;
}
