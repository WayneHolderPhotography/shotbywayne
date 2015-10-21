<?php 

$files = glob("../../images/clients/cl1/*.*"); 
sort($files);

foreach($files as $image)
{
  echo '<img src="'. $image .'" />';
}

?>
