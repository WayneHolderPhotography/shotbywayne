<?php 

$files = glob("images/beauty_and_fashion/*.*"); 
sort($files);

foreach($files as $image)
{
  echo '<img src="'. $image .'" />';
}

?>
