<template>
    <footer>
    <div class="footer">
      <div class="footer-content">
        <div class="company-name">
          <p>© LETTUCE HEAD STUDIO.com</p>
        </div>
      </div>
    </div>
  </footer>

</template>

<style scope>
.footer {
    width: 100%;
    height: 50px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
}

.footer-content {
    display: flex;
    width: 100%;
    max-width: 1200px;
    align-items: center;
    justify-content: center;
}

.company-name p {
    color: white;
    margin: 0;
    text-align: center;
}

@media (max-width: 768px) {
  .footer {
    height: 60px;
    padding: 0 15px;
  }

  .footer-content {
    flex-direction: column;
    text-align: center;
  }

  .company-name p {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .footer {
    height: auto;
    padding: 10px;
  }

  .company-name p {
    font-size: 0.8rem;
    line-height: 1.4;
  }
}
</style>