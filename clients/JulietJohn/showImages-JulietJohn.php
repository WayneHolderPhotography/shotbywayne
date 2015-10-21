<?php 

$files = glob("../../images/clients/JulietJohn/*.*"); 
sort($files);

foreach($files as $image)
{
  echo '<img src="'. $image .'" />';
}

?>
