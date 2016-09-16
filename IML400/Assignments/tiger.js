<script type="text/javascript">
    
    document.getElementById('tiger').style.display = 'none';
    
    function printTiger() {
    var bodyPart = document.getElementById('body_part').value;
    
        document.getElementById(bodyPart).style.display = 'block';
    
    }
    
    document.getElementById('enter').addEventListener('click', printTiger);

</script>