/**
 * 
 * @author Thomas Krammer - thomas.krammer@dotworx.at
 * @copyright 2013 DOTWORX - Web- & Mobile Development KG
 * @version 1.1.1
 *
 * This plugin allows you to rotate n DOM element (e.g. div) by the amount of degrees given.
 *
 * @param degress int 		Degrees (0-360)
 * @param options Object	Options (not yet)
 *                  
 */
$.fn.jqrotate = function(degrees, options)
{
	var options = $.extend({ 
				animate : false // not yet implemented
				}, options);
			    
			    return this.each(function()
			    {
			        var $this = $(this);
			  
			      var oObj = $this[0];
			      var deg2radians = Math.PI * 2 / 360;
			      
			      var rad = degrees * deg2radians;
			      var costheta = Math.cos(rad);
			      var sintheta = Math.sin(rad);
			      
			      a = parseFloat(costheta).toFixed(8);
			      b = parseFloat(-sintheta).toFixed(8);
			      c = parseFloat(sintheta).toFixed(8);
			      d = parseFloat(costheta).toFixed(8);
			      
			      $this.css( {	'-ms-filter' : 'progid:DXImageTransform.Microsoft.Matrix(M11=' + a + ', M12=' + b + ', M21=' + c + ', M22=' + d + ',sizingMethod=\'auto expand\')',
			    	  			'filter' : 'progid:DXImageTransform.Microsoft.Matrix(M11=' + a + ', M12=' + b + ', M21=' + c + ', M22=' + d + ',sizingMethod=\'auto expand\')',
			    	  			'-moz-transform' :  "matrix(" + a + ", " + c + ", " + b + ", " + d + ", 0, 0)",
								'-ms-transform' :  "matrix(" + a + ", " + c + ", " + b + ", " + d + ", 0, 0)",
			    	  			'-webkit-transform' :  "matrix(" + a + ", " + c + ", " + b + ", " + d + ", 0, 0)",
			    	  			'-o-transform' :  "matrix(" + a + ", " + c + ", " + b + ", " + d + ", 0, 0)",
								'transform' :  "matrix(" + a + ", " + c + ", " + b + ", " + d + ", 0, 0)"
			      });
			      
			      // set margins to correct overflow
			      // a / b = sin alpha / sin beta
			      var margin = parseInt(((Math.sin(degrees) / Math.sin(90 - degrees)) * $(this).width()) / 2);
			      $(this).css('margin-top', margin + 'px').css('margin-bottom', margin + 'px')
			        
			    });  
			};