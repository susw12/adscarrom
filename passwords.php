$userpass = array("asdf", "qwerty", "jkl", "abcd");
$list = array("a", "b", "c", "d");
$length = count($list);
$salt = "asdf";
$pass = false;
$username = "a";
$password = "asdf";

$key = array_search($username, $list);

if (strval($key) == null) {
  echo "password does not exist"; 
}
else {
  for ($i = 0; $i < $length; $i++) {
     if ($userpass{$i} == $password) {
       $index = (array_search($password, $userpass));
       if ($index == $key) {
         $pass = true;
       }
     }
   }
}

echo $pass;
