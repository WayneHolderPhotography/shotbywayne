<?php 

$files = glob("images/portraits/*.*"); 
sort($files);

foreach($files as $image)
{
  echo '<img src="'. $image .'" />';
}

?>
