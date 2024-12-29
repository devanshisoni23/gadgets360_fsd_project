
document.getElementById('navbarContainer').innerHTML = `
<nav class="navbar navbar-expand-lg navbar-dark bg-danger">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="https://play-lh.googleusercontent.com/VrrkWro77Ke4ZQ_DqN0nruLjdZBO_sU5jKZ6CBjVVwshGGArUK_VAk50coG7Ah5AwuQT" alt="" height="50" width="50">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" href="home.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="bnews.html">Business News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="crypto1.html">Crypto</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="tech1.html">Tech</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="movies1.html">Movie</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="education1.html">Education</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="apps.html">Apps</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="influencers1.html">Influencers</a>
                    </li>
                </ul>
                <!-- Search bar -->
                <div class="search-bar">
                    <input id="searchInput" class="form-control" type="text" placeholder="Search" aria-label="Search" oninput="handleSearchInput(this.value)" onclick="populateDropdown(this.value)">
                    <div id="searchDropdown" class="search-dropdown"></div>
                </div>
            </div>
        </div>
    </nav>
`