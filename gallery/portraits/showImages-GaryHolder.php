<?php 

$files = glob("../../images/projects/GaryHolder/*.*"); 
sort($files);

foreach($files as $image)
{
  echo '<img src="'. $image .'" />';
}

?>
