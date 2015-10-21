<?php 

$files = glob("../../images/clients/lorenzo/*.*"); 
sort($files);

foreach($files as $image)
{
  echo '<img src="'. $image .'" />';
}

?>
