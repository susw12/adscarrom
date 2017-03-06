

function Vector2(x, y) {
	// in innerboards/sec
        
        this.x = x;
        this.y = y;

}

Vector2.prototype = {
	add: function(v) {
                return new Vector(this.x+v.x, this.y+that.y);
	},
                
        subtract: function(v) {
                return new Vector(this.x-v.x, this.y-that.y);
        },
                
        dot: function(v) {
                return new Vector(this.x*v.x+this.y*that.y);
	},
                
        cross: function(v) {
                return this.x*v.y + this.y*v.x;
        },
        
        multiply: function(v) {
                if (v instanceof Vector) { return this.dot(that.v); }
                else { return this.scale(v); }
        },
        
        scale: function(n) {
                return new Vector(this.x * n, this.y * n);
        },
        
        copy: function() {
                return new Vector(this.x, this.y)
        },
	
	negative: function() {
		return new Vector(-this.x, -this.y);	
	},
	
	length: function() {
		return MATH.sqrt(this.cross(this))
	}
                
        
};
		
