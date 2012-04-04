# Require any additional compass plugins here.
require 'animation'
 
# Set this to the root of your project when deployed:
http_path = File.dirname(File.dirname(__FILE__))
css_dir = "#{http_path}/assets/css"
sass_dir = "#{http_path}/assets/scss"
images_dir = "#{http_path}/assets/img"
javascripts_dir = "#{http_path}/assets/js"

print javascripts_dir
 
# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed
 
# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true
 
# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false
 
preferred_syntax = :sass