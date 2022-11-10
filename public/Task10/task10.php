<!DOCTYPE html>
<html>
<head>
	<title>Task10</title>
</head>
<body>

	<?php

    // 指定された2つの配列の共通要素を含む新しい配列を返します。
	function compareArrays($a1, $a2){
		// ここにコードを書いてください
		$value = array_intersect($a1, $a2);
		$result = '<p>';
		foreach($value as $item){
			$result = $result . $item . '  ';
		}
		return $result;
	}

	echo(compareArrays(['red', 'green', 'yellow'], ['red', 'green', 'black']));
	echo(compareArrays(['a', 'b', 'c', 'd', 'e'], ['a', 'b', 'c', 'd', 'e']));
	echo(compareArrays(['a'], ['a', 'b']));
	echo(compareArrays(['a'], ['a', 'c']));
	echo(compareArrays(['a', 'ac', 'eb'], ['a', 'ca', 'be']));
	echo(compareArrays(['a', 'b', 'c'], ['a', 'b', 'c']));

	?>

</body>
</html>
