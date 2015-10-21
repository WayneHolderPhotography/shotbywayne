<?php 

$files = glob("../../images/projects/Maternity/*.*"); 
sort($files);

foreach($files as $image)
{
  echo '<img src="'. $image .'" />';
}

?>
