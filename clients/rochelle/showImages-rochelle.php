<?php 

$files = glob("../../images/clients/rochelle/*.*"); 
sort($files);

foreach($files as $image)
{
  echo '<img src="'. $image .'" />';
}

?>
