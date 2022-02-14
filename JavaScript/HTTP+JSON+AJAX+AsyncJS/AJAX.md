# AJAX

- web进化史中曾有个问题是if there was an update on any parts of the web, the whole page had to reload, which results in a poor user experience and is very wasteful.

- a solution to the problem was the creation of __AJAX__, which allows small chunks of data to be requested and display only when needed. 由Google 2006年推出。
  
- the old way (when AJAX just came along): __XHR__;

- the new old way: __jQuery__;

- the new way: __Fetch__:
  ```
  fetch('/my/url').then(response => {console.log(response)});
  ```

  