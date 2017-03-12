/* start module: game */
$pyjs.loaded_modules['game'] = function (__mod_name__) {
	if($pyjs.loaded_modules['game'].__was_initialized__) return $pyjs.loaded_modules['game'];
	var $m = $pyjs.loaded_modules["game"];
	$m.__repr__ = function() { return "<module: game>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'game';
	$m.__name__ = __mod_name__;


	$m['pygame'] = $p['___import___']('pyjsdl', null, null, false);
	$m['pi'] = $p['___import___']('math.pi', null, null, false);
	$m['cos'] = $p['___import___']('math.cos', null, null, false);
	$m['sin'] = $p['___import___']('math.sin', null, null, false);
	$m['sqrt'] = $p['___import___']('math.sqrt', null, null, false);
	$m['randint'] = $p['___import___']('random.randint', null, null, false);
	$m['random'] = $p['___import___']('random.random', null, null, false);
	$m['open'] = $p['___import___']('io.open', null, null, false);
	$m['pyjsdl']['display']['setup']((typeof run == "undefined"?$m.run:run), (typeof images == "undefined"?$m.images:images));
	$m['Vector2'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'game';
		$method = $pyjs__bind_method2('__init__', function(data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}

			self.x = data.__getitem__(0);
			self.y = data.__getitem__(1);
			return null;
		}
	, 1, [null,null,['self'],['data']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__add__', function(v) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				v = arguments[1];
			}
			var $add2,$add3,$add1,$add4;
			return $m['Vector2']($p['tuple']([$p['__op_add']($add1=$p['getattr'](self, 'x'),$add2=$p['getattr'](v, 'x')), $p['__op_add']($add3=$p['getattr'](self, 'y'),$add4=$p['getattr'](v, 'y'))]));
		}
	, 1, [null,null,['self'],['v']]);
		$cls_definition['__add__'] = $method;
		$method = $pyjs__bind_method2('__sub__', function(v) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				v = arguments[1];
			}
			var $sub3,$sub2,$sub1,$sub4;
			return $m['Vector2']($p['tuple']([$p['__op_sub']($sub1=$p['getattr'](self, 'x'),$sub2=$p['getattr'](v, 'x')), $p['__op_sub']($sub3=$p['getattr'](self, 'y'),$sub4=$p['getattr'](v, 'y'))]));
		}
	, 1, [null,null,['self'],['v']]);
		$cls_definition['__sub__'] = $method;
		$method = $pyjs__bind_method2('__mul__', function(v) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				v = arguments[1];
			}
			var $or1,$or2,$add5,$add6,$mul4,$mul3,$mul2,$mul1;
			if ($p['bool'](($p['bool']($or1=(v === $p['float']))?$or1:(v === $p['float_int'])))) {
				return self['scale'](v);
			}
			return $p['__op_add']($add5=(typeof ($mul1=$p['getattr'](self, 'x'))==typeof ($mul2=$p['getattr'](v, 'x')) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2)),$add6=(typeof ($mul3=$p['getattr'](self, 'y'))==typeof ($mul4=$p['getattr'](v, 'y')) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4)));
		}
	, 1, [null,null,['self'],['v']]);
		$cls_definition['__mul__'] = $method;
		$method = $pyjs__bind_method2('__div__', function(i) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				i = arguments[1];
			}
			var $or4,$or3,$div2,$div3,$div1,$div4;
			if ($p['bool'](($p['bool']($or3=(i === $p['float_int']))?$or3:(i === $p['float'])))) {
				return $m['Vector2']($p['tuple']([(typeof ($div1=$p['getattr'](self, 'x'))==typeof ($div2=i) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_truediv']($div1,$div2)), (typeof ($div3=$p['getattr'](self, 'y'))==typeof ($div4=i) && typeof $div3=='number' && $div4 !== 0?
					$div3/$div4:
					$p['op_truediv']($div3,$div4))]));
			}
			return null;
		}
	, 1, [null,null,['self'],['i']]);
		$cls_definition['__div__'] = $method;
		$method = $pyjs__bind_method2('__neg__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['Vector2']($p['tuple']([(typeof ($usub1=$p['getattr'](self, 'x'))=='number'?
				-$usub1:
				$p['op_usub']($usub1)), (typeof ($usub2=$p['getattr'](self, 'y'))=='number'?
				-$usub2:
				$p['op_usub']($usub2))]));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__neg__'] = $method;
		$method = $pyjs__bind_method2('mag', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $pow4,$pow3,$pow2,$pow1,$add7,$add8;
			return $m['sqrt']($p['__op_add']($add7=(typeof ($pow1=$p['getattr'](self, 'x'))==typeof ($pow2=2) && typeof $pow1=='number'?
				Math.pow($pow1,$pow2):
				$p['op_pow']($pow1,$pow2)),$add8=(typeof ($pow3=$p['getattr'](self, 'y'))==typeof ($pow4=2) && typeof $pow3=='number'?
				Math.pow($pow3,$pow4):
				$p['op_pow']($pow3,$pow4))));
		}
	, 1, [null,null,['self']]);
		$cls_definition['mag'] = $method;
		$method = $pyjs__bind_method2('scale', function(i) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				i = arguments[1];
			}
			var $mul8,$mul7,$mul6,$mul5;
			return $m['Vector2']($p['tuple']([(typeof ($mul5=$p['getattr'](self, 'x'))==typeof ($mul6=i) && typeof $mul5=='number'?
				$mul5*$mul6:
				$p['op_mul']($mul5,$mul6)), (typeof ($mul7=$p['getattr'](self, 'y'))==typeof ($mul8=i) && typeof $mul7=='number'?
				$mul7*$mul8:
				$p['op_mul']($mul7,$mul8))]));
		}
	, 1, [null,null,['self'],['i']]);
		$cls_definition['scale'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Vector2', $p['tuple']($bases), $data);
	})();
	$m['Board'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'game';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add12,pos,$iter1_iter,scalar,typ,$div10,$iter1_array,theta,$div5,$mul20,$iter1_nextval,$div8,$div9,todeg,$add11,$mul9,x,line,data,$div7,$iter1_type,$mul17,$mul16,$mul15,$mul14,$mul13,$mul12,$mul11,f,$mul10,$mul19,$mul18,r,$iter1_idx,y,$add10,$add9,$div6;
			self.size = 500;
			self.discs = $p['list']([(typeof Striker == "undefined"?$m.Striker:Striker)($m['Vector2']($p['tuple']([100, 100])), 1)]);
			f = $m['open']('setup.txt', 'r');
			todeg = (typeof ($div5=$m['pi'])==typeof ($div6=180) && typeof $div5=='number' && $div6 !== 0?
				$div5/$div6:
				$p['op_truediv']($div5,$div6));
			$iter1_iter = f;
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
				line = $iter1_nextval.$nextval;
				data = line['$$split']();
				r = $p['float'](data.__getitem__(0));
				theta = (typeof ($mul9=$p['float'](data.__getitem__(1)))==typeof ($mul10=todeg) && typeof $mul9=='number'?
					$mul9*$mul10:
					$p['op_mul']($mul9,$mul10));
				typ = $p['float_int'](data.__getitem__(2));
				scalar = (typeof ($mul15=(typeof ($mul13=(typeof ($mul11=r)==typeof ($mul12=2) && typeof $mul11=='number'?
					$mul11*$mul12:
					$p['op_mul']($mul11,$mul12)))==typeof ($mul14=13) && typeof $mul13=='number'?
					$mul13*$mul14:
					$p['op_mul']($mul13,$mul14)))==typeof ($mul16=1.05) && typeof $mul15=='number'?
					$mul15*$mul16:
					$p['op_mul']($mul15,$mul16));
				x = $p['__op_add']($add9=(typeof ($mul17=scalar)==typeof ($mul18=$m['cos'](theta)) && typeof $mul17=='number'?
					$mul17*$mul18:
					$p['op_mul']($mul17,$mul18)),$add10=(typeof ($div7=$p['getattr'](self, 'size'))==typeof ($div8=2) && typeof $div7=='number' && $div8 !== 0?
					$div7/$div8:
					$p['op_truediv']($div7,$div8)));
				y = $p['__op_add']($add11=(typeof ($mul19=scalar)==typeof ($mul20=$m['sin'](theta)) && typeof $mul19=='number'?
					$mul19*$mul20:
					$p['op_mul']($mul19,$mul20)),$add12=(typeof ($div9=$p['getattr'](self, 'size'))==typeof ($div10=2) && typeof $div9=='number' && $div10 !== 0?
					$div9/$div10:
					$p['op_truediv']($div9,$div10)));
				pos = $m['Vector2']($p['tuple']([x, y]));
				self['discs']['append']((typeof Disc == "undefined"?$m.Disc:Disc)(pos, typ));
			}
			self.surf = $m['pygame']['Surface']($p['tuple']([$p['getattr'](self, 'size'), $p['getattr'](self, 'size')]));
			self.image = $m['pygame']['image']['load']('board.jpg');
			self.image = $m['pygame']['transform']['scale']($p['getattr'](self, 'image'), $p['tuple']([$p['getattr'](self, 'size'), $p['getattr'](self, 'size')]));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('draw', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter2_nextval,$iter2_type,$iter2_iter,$iter2_idx,disc,$iter2_array;
			self['surf']['blit']($p['getattr'](self, 'image'), $p['tuple']([0, 0]));
			$iter2_iter = $p['getattr'](self, 'discs');
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
				disc = $iter2_nextval.$nextval;
				disc['draw']($p['getattr'](self, 'surf'));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['draw'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Board', $p['tuple']($bases), $data);
	})();
	$m['Disc'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'game';
		$method = $pyjs__bind_method2('__init__', function(pos, typ) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pos = arguments[1];
				typ = arguments[2];
			}

			self.pos = pos;
			self.vel = $m['Vector2']($p['tuple']([0, 0]));
			self.typ = typ;
			self.r = 13;
			self.mass = 5;
			return null;
		}
	, 1, [null,null,['self'],['pos'],['typ']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('draw', function(boardsurf) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				boardsurf = arguments[1];
			}
			var col;
			if ($p['bool']($p['op_eq']($p['getattr'](self, 'typ'), 2))) {
				col = $p['tuple']([255, 0, 0]);
			}
			else if ($p['bool']($p['op_eq']($p['getattr'](self, 'typ'), 1))) {
				col = $p['tuple']([255, 255, 255]);
			}
			else {
				col = $p['tuple']([0, 0, 0]);
			}
			$m['pygame']['draw']['circle'](boardsurf, col, $p['tuple']([$p['float_int']($p['getattr']($p['getattr'](self, 'pos'), 'x')), $p['float_int']($p['getattr']($p['getattr'](self, 'pos'), 'y'))]), $p['getattr'](self, 'r'));
			return null;
		}
	, 1, [null,null,['self'],['boardsurf']]);
		$cls_definition['draw'] = $method;
		$method = $pyjs__bind_method2('getpcollide', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var dist,$iter3_type,$add13,pos,pr,$pow6,$pow5,$iter3_idx,py,$pow8,$sub9,$sub8,$iter3_iter,$sub7,$sub6,$sub5,$mul21,$pow7,$sub10,$add14,$iter3_array,$iter3_nextval,$mul22,thisr,px;
			pr = 19;
			thisr = 13;
			$iter3_iter = $p['tuple']([$p['tuple']([45, 45]), $p['tuple']([45, 455]), $p['tuple']([455, 455]), $p['tuple']([455, 45])]);
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
				pos = $iter3_nextval.$nextval;
				px = pos.__getitem__(0);
				py = pos.__getitem__(1);
				dist = $m['sqrt']($p['__op_add']($add13=(typeof ($pow5=$p['__op_sub']($sub5=$p['getattr']($p['getattr'](self, 'pos'), 'x'),$sub6=px))==typeof ($pow6=2) && typeof $pow5=='number'?
					Math.pow($pow5,$pow6):
					$p['op_pow']($pow5,$pow6)),$add14=(typeof ($pow7=$p['__op_sub']($sub7=$p['getattr']($p['getattr'](self, 'pos'), 'y'),$sub8=py))==typeof ($pow8=2) && typeof $pow7=='number'?
					Math.pow($pow7,$pow8):
					$p['op_pow']($pow7,$pow8))));
				if ($p['bool'](($p['cmp']((typeof ($mul21=dist)==typeof ($mul22=0.6) && typeof $mul21=='number'?
					$mul21*$mul22:
					$p['op_mul']($mul21,$mul22)), $p['abs']($p['__op_sub']($sub9=thisr,$sub10=pr))) < 1))) {
					return true;
				}
			}
			return false;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getpcollide'] = $method;
		$method = $pyjs__bind_method2('wcollide', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $sub22,$sub20,$sub21,$and5,ret,$sub17,$and1,$and2,$and8,$sub19,$sub18,$sub13,$sub12,$sub11,$and3,$and4,$sub16,$sub15,$sub14,$add15,$add16,$add17,$and6,$and7,$add18;
			ret = false;
			if ($p['bool'](($p['bool']($and1=($p['cmp']($p['__op_sub']($sub11=$p['getattr']($p['getattr'](self, 'pos'), 'x'),$sub12=$p['getattr'](self, 'r')), 25) == -1))?($p['cmp']($p['getattr']($p['getattr'](self, 'vel'), 'x'), 0) == -1):$and1))) {
				ret = true;
				$p['getattr'](self, 'vel').x = $p['__op_sub']($sub13=0,$sub14=$p['getattr']($p['getattr'](self, 'vel'), 'x'));
			}
			if ($p['bool'](($p['bool']($and3=($p['cmp']($p['__op_add']($add15=$p['getattr']($p['getattr'](self, 'pos'), 'x'),$add16=$p['getattr'](self, 'r')), 475) == 1))?($p['cmp']($p['getattr']($p['getattr'](self, 'vel'), 'x'), 0) == 1):$and3))) {
				$p['getattr'](self, 'vel').x = $p['__op_sub']($sub15=0,$sub16=$p['getattr']($p['getattr'](self, 'vel'), 'x'));
				ret = true;
			}
			if ($p['bool'](($p['bool']($and5=($p['cmp']($p['__op_sub']($sub17=$p['getattr']($p['getattr'](self, 'pos'), 'y'),$sub18=$p['getattr'](self, 'r')), 25) == -1))?($p['cmp']($p['getattr']($p['getattr'](self, 'vel'), 'y'), 0) == -1):$and5))) {
				$p['getattr'](self, 'vel').y = $p['__op_sub']($sub19=0,$sub20=$p['getattr']($p['getattr'](self, 'vel'), 'y'));
				ret = true;
			}
			if ($p['bool'](($p['bool']($and7=($p['cmp']($p['__op_add']($add17=$p['getattr']($p['getattr'](self, 'pos'), 'y'),$add18=$p['getattr'](self, 'r')), 475) == 1))?($p['cmp']($p['getattr']($p['getattr'](self, 'vel'), 'y'), 0) == 1):$and7))) {
				$p['getattr'](self, 'vel').y = $p['__op_sub']($sub21=0,$sub22=$p['getattr']($p['getattr'](self, 'vel'), 'y'));
				ret = true;
			}
			return ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['wcollide'] = $method;
		$method = $pyjs__bind_method2('dcollide', function(d) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				d = arguments[1];
			}
			var $sub23,$div17,$sub26,$sub27,$sub24,$sub25,$sub28,$sub29,$div11,$div12,dist,$pow14,$pow13,$pow12,$pow11,$pow10,$div18,$div19,magsquare,$add21,$add20,$add22,$add24,$pow9,$div13,m1,$mul28,m2,$mul26,$mul27,$mul24,$mul25,$mul23,$sub31,$sub30,$sub33,$sub32,$sub34,main1,main2,$mul29,msum,$div15,$add19,$div21,$div20,$div22,rsum,$div16,veldif,$mul30,$div14,posdif,$mul34,$mul31,$add23,$mul33,$mul32;
			rsum = $p['__op_add']($add19=$p['getattr'](self, 'r'),$add20=$p['getattr'](d, 'r'));
			dist = $m['sqrt']($p['__op_add']($add21=(typeof ($pow9=$p['__op_sub']($sub23=$p['getattr']($p['getattr'](self, 'pos'), 'x'),$sub24=$p['getattr']($p['getattr'](d, 'pos'), 'x')))==typeof ($pow10=2) && typeof $pow9=='number'?
				Math.pow($pow9,$pow10):
				$p['op_pow']($pow9,$pow10)),$add22=(typeof ($pow11=$p['__op_sub']($sub25=$p['getattr']($p['getattr'](self, 'pos'), 'y'),$sub26=$p['getattr']($p['getattr'](d, 'pos'), 'y')))==typeof ($pow12=2) && typeof $pow11=='number'?
				Math.pow($pow11,$pow12):
				$p['op_pow']($pow11,$pow12))));
			if ($p['bool'](($p['cmp'](dist, rsum) == -1))) {
				posdif = $p['__op_sub']($sub27=$p['getattr'](self, 'pos'),$sub28=$p['getattr'](d, 'pos'));
				veldif = $p['__op_sub']($sub29=$p['getattr'](self, 'vel'),$sub30=$p['getattr'](d, 'vel'));
				magsquare = (typeof ($pow13=posdif['mag']())==typeof ($pow14=2) && typeof $pow13=='number'?
					Math.pow($pow13,$pow14):
					$p['op_pow']($pow13,$pow14));
				msum = $p['__op_add']($add23=$p['getattr'](self, 'mass'),$add24=$p['getattr'](d, 'mass'));
				m1 = (typeof ($div11=(typeof ($mul23=2)==typeof ($mul24=$p['getattr'](d, 'mass')) && typeof $mul23=='number'?
					$mul23*$mul24:
					$p['op_mul']($mul23,$mul24)))==typeof ($div12=msum) && typeof $div11=='number' && $div12 !== 0?
					$div11/$div12:
					$p['op_truediv']($div11,$div12));
				m2 = (typeof ($div13=(typeof ($mul25=2)==typeof ($mul26=$p['getattr'](self, 'mass')) && typeof $mul25=='number'?
					$mul25*$mul26:
					$p['op_mul']($mul25,$mul26)))==typeof ($div14=msum) && typeof $div13=='number' && $div14 !== 0?
					$div13/$div14:
					$p['op_truediv']($div13,$div14));
				main1 = (typeof ($div15=(typeof ($mul27=posdif)==typeof ($mul28=veldif) && typeof $mul27=='number'?
					$mul27*$mul28:
					$p['op_mul']($mul27,$mul28)))==typeof ($div16=magsquare) && typeof $div15=='number' && $div16 !== 0?
					$div15/$div16:
					$p['op_truediv']($div15,$div16));
				main2 = (typeof ($div17=(typeof ($mul29=(typeof ($usub3=posdif)=='number'?
					-$usub3:
					$p['op_usub']($usub3)))==typeof ($mul30=(typeof ($usub4=veldif)=='number'?
					-$usub4:
					$p['op_usub']($usub4))) && typeof $mul29=='number'?
					$mul29*$mul30:
					$p['op_mul']($mul29,$mul30)))==typeof ($div18=magsquare) && typeof $div17=='number' && $div18 !== 0?
					$div17/$div18:
					$p['op_truediv']($div17,$div18));
				self.vel = $p['__op_sub']($sub31=$p['getattr'](self, 'vel'),$sub32=posdif['scale']((typeof ($mul31=m1)==typeof ($mul32=main1) && typeof $mul31=='number'?
					$mul31*$mul32:
					$p['op_mul']($mul31,$mul32))))['scale'](1.05);
				if ($p['bool'](($p['cmp'](self['vel']['mag'](), 3) == -1))) {
					self.vel = self['vel']['scale']((typeof ($div19=3)==typeof ($div20=self['vel']['mag']()) && typeof $div19=='number' && $div20 !== 0?
						$div19/$div20:
						$p['op_truediv']($div19,$div20)));
				}
				d.vel = $p['__op_sub']($sub33=$p['getattr'](d, 'vel'),$sub34=(typeof ($usub5=posdif)=='number'?
					-$usub5:
					$p['op_usub']($usub5))['scale']((typeof ($mul33=m2)==typeof ($mul34=main1) && typeof $mul33=='number'?
					$mul33*$mul34:
					$p['op_mul']($mul33,$mul34))))['scale'](1.05);
				if ($p['bool'](($p['cmp'](d['vel']['mag'](), 3) == -1))) {
					d.vel = d['vel']['scale']((typeof ($div21=3)==typeof ($div22=self['vel']['mag']()) && typeof $div21=='number' && $div22 !== 0?
						$div21/$div22:
						$p['op_truediv']($div21,$div22)));
				}
				return true;
			}
			return false;
		}
	, 1, [null,null,['self'],['d']]);
		$cls_definition['dcollide'] = $method;
		$method = $pyjs__bind_method2('move', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add28,$div23,$div25,$div24,$div27,$div26,$div29,$div28,$add25,$div30,$add27,$add26,$pow17,$mul38,$pow18,$mul35,$pow16,$pow15,$mul36,$mul37;
			$p['getattr'](self, 'pos').x = $p['__op_add']($add25=$p['getattr']($p['getattr'](self, 'pos'), 'x'),$add26=(typeof ($div23=$p['getattr']($p['getattr'](self, 'vel'), 'x'))==typeof ($div24=60) && typeof $div23=='number' && $div24 !== 0?
				$div23/$div24:
				$p['op_truediv']($div23,$div24)));
			$p['getattr'](self, 'pos').y = $p['__op_add']($add27=$p['getattr']($p['getattr'](self, 'pos'), 'y'),$add28=(typeof ($div25=$p['getattr']($p['getattr'](self, 'vel'), 'y'))==typeof ($div26=60) && typeof $div25=='number' && $div26 !== 0?
				$div25/$div26:
				$p['op_truediv']($div25,$div26)));
			$p['getattr'](self, 'vel').x = (typeof ($mul35=$p['getattr']($p['getattr'](self, 'vel'), 'x'))==typeof ($mul36=(typeof ($pow15=0.15)==typeof ($pow16=(typeof ($div27=1)==typeof ($div28=60) && typeof $div27=='number' && $div28 !== 0?
				$div27/$div28:
				$p['op_truediv']($div27,$div28))) && typeof $pow15=='number'?
				Math.pow($pow15,$pow16):
				$p['op_pow']($pow15,$pow16))) && typeof $mul35=='number'?
				$mul35*$mul36:
				$p['op_mul']($mul35,$mul36));
			$p['getattr'](self, 'vel').y = (typeof ($mul37=$p['getattr']($p['getattr'](self, 'vel'), 'y'))==typeof ($mul38=(typeof ($pow17=0.15)==typeof ($pow18=(typeof ($div29=1)==typeof ($div30=60) && typeof $div29=='number' && $div30 !== 0?
				$div29/$div30:
				$p['op_truediv']($div29,$div30))) && typeof $pow17=='number'?
				Math.pow($pow17,$pow18):
				$p['op_pow']($pow17,$pow18))) && typeof $mul37=='number'?
				$mul37*$mul38:
				$p['op_mul']($mul37,$mul38));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['move'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Disc', $p['tuple']($bases), $data);
	})();
	$m['Striker'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'game';
		$method = $pyjs__bind_method2('__init__', function(pos, typ) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pos = arguments[1];
				typ = arguments[2];
			}

			self.pos = pos;
			self.vel = $m['Vector2']($p['tuple']([0, 0]));
			self.typ = typ;
			self.r = 17;
			self.mass = 15;
			return null;
		}
	, 1, [null,null,['self'],['pos'],['typ']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getpcollide', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return false;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getpcollide'] = $method;
		var $bases = new Array($m['Disc']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Striker', $p['tuple']($bases), $data);
	})();
	$m['Game'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'game';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.wscore = 0;
			self.bscore = 0;
			self.board = $m['Board']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('move', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter5_nextval,$iter5_idx,$iter5_iter,$iter4_type,$iter5_type,cold,$iter4_iter,$add29,$iter5_array,$sub35,$sub36,count1,count2,$add32,$iter4_nextval,$add30,$add31,$add34,$iter4_idx,disc,$add33,$iter4_array;
			cold = false;
			$iter4_iter = $p['getattr']($p['getattr'](self, 'board'), 'discs');
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval).$nextval) != 'undefined') {
				disc = $iter4_nextval.$nextval;
				disc['move']();
			}
			count1 = 0;
			$iter5_iter = $p['getattr']($p['getattr'](self, 'board'), 'discs');
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval).$nextval) != 'undefined') {
				disc = $iter5_nextval.$nextval;
				if ($p['bool'](disc['wcollide']())) {
					cold = true;
				}
			}
			while ($p['bool'](($p['cmp'](count1, $p['__op_sub']($sub35=$p['len']($p['getattr']($p['getattr'](self, 'board'), 'discs')),$sub36=1)) == -1))) {
				count2 = $p['__op_add']($add29=count1,$add30=1);
				while ($p['bool'](($p['cmp'](count2, $p['len']($p['getattr']($p['getattr'](self, 'board'), 'discs'))) == -1))) {
					if ($p['bool']($p['getattr']($p['getattr'](self, 'board'), 'discs').__getitem__(count1)['dcollide']($p['getattr']($p['getattr'](self, 'board'), 'discs').__getitem__(count2)))) {
						cold = true;
					}
					count2 = $p['__op_add']($add31=count2,$add32=1);
				}
				count1 = $p['__op_add']($add33=count1,$add34=1);
			}
			return cold;
		}
	, 1, [null,null,['self']]);
		$cls_definition['move'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Game', $p['tuple']($bases), $data);
	})();
	$m['Client'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'game';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.size = $p['tuple']([800, 600]);
			$m['pygame']['init']();
			$m['pygame']['mixer']['init']();
			self.holesound = $m['pygame']['mixer']['Sound']('yee.wav');
			self.game = $m['Game']();
			self.screen = $m['pygame']['display']['set_mode']($p['getattr'](self, 'size'));
			self.clock = $m['pygame']['time']['Clock']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('run', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter6_type,disc,$sub40,$iter6_iter,event,$iter6_nextval,$iter6_idx,$mul40,$mul41,$mul42,a,run,$sub37,$sub39,$sub38,$iter6_array,count,$add36,$add35,discs,$mul39;
			run = true;
			while ($p['bool'](run)) {
				if ($p['bool'](self['game']['move']())) {
				}
				$iter6_iter = $m['pygame']['event']['get']();
				$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
				while (typeof($p['__wrapped_next']($iter6_nextval).$nextval) != 'undefined') {
					event = $iter6_nextval.$nextval;
					if ($p['bool']($p['op_eq']($p['getattr'](event, 'type'), $p['getattr']($m['pygame'], 'QUIT')))) {
						run = false;
					}
				}
				count = 0;
				discs = $p['getattr']($p['getattr']($p['getattr'](self, 'game'), 'board'), 'discs');
				while ($p['bool'](($p['cmp'](count, $p['len'](discs)) == -1))) {
					disc = discs.__getitem__(count);
					if ($p['bool'](disc['getpcollide']())) {
						self['holesound']['play']();
						discs.__delitem__(count);
					}
					count = $p['__op_add']($add35=count,$add36=1);
				}
				a = $m['randint'](1, 100);
				if ($p['bool']($p['op_eq'](1, a))) {
					discs.__getitem__(0).vel = $m['Vector2']($p['tuple']([(typeof ($mul39=$p['__op_sub']($sub37=$m['random'](),$sub38=0.5))==typeof ($mul40=999) && typeof $mul39=='number'?
						$mul39*$mul40:
						$p['op_mul']($mul39,$mul40)), (typeof ($mul41=$p['__op_sub']($sub39=$m['random'](),$sub40=0.5))==typeof ($mul42=999) && typeof $mul41=='number'?
						$mul41*$mul42:
						$p['op_mul']($mul41,$mul42))]));
				}
				self['draw']();
				self['clock']['tick'](60);
			}
			$m['pygame']['quit']();
			$m['pygame']['mixer']['quit']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['run'] = $method;
		$method = $pyjs__bind_method2('draw', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $div32,$div33,$div31,$div34,pos,board,$sub41,$sub42,$sub43,$sub44;
			self['screen']['fill']($p['tuple']([255, 255, 255]));
			board = $p['getattr']($p['getattr'](self, 'game'), 'board');
			board['draw']();
			pos = $p['tuple']([(typeof ($div31=$p['__op_sub']($sub41=$p['getattr'](self, 'size').__getitem__(0),$sub42=$p['getattr'](board, 'size')))==typeof ($div32=2) && typeof $div31=='number' && $div32 !== 0?
				$div31/$div32:
				$p['op_truediv']($div31,$div32)), (typeof ($div33=$p['__op_sub']($sub43=$p['getattr'](self, 'size').__getitem__(1),$sub44=$p['getattr'](board, 'size')))==typeof ($div34=2) && typeof $div33=='number' && $div34 !== 0?
				$div33/$div34:
				$p['op_truediv']($div33,$div34))]);
			self['screen']['blit']($p['getattr']($p['getattr']($p['getattr'](self, 'game'), 'board'), 'surf'), pos);
			$m['pygame']['display']['update']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['draw'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Client', $p['tuple']($bases), $data);
	})();
	$m['client'] = $m['Client']();
	$m['client']['run']();
	return this;
}; /* end game */


/* end module: game */


/*
PYJS_DEPS: ['pyjsdl', 'math.pi', 'math', 'math.cos', 'math.sin', 'math.sqrt', 'random.randint', 'random', 'random.random', 'io.open', 'io']
*/
