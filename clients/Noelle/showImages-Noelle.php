<?php 

$files = glob("../../images/clients/Noelle/*.*"); 
sort($files);

foreach($files as $image)
{
  echo '<img src="'. $image .'" />';
}

?>
