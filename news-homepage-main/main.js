function showSideBar(e){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = 'flex';
    e.preventDefault();
}
function hideSideBar(e){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = 'none';
    e.preventDefault();
    
}