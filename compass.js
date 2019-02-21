window.addEventListener('load', () => {
  const alphaDebug = document.getElementById('alpha')
  const betaDebug = document.getElementById('beta')
  const gammaDebug = document.getElementById('gamma')
  const headingDebug = document.getElementById('heading')

  window.addEventListener('deviceorientation', (event) => {
    const {
      absolute,
      alpha,
      beta,
      gamma,
    } = event

    alphaDebug.value = alpha
    betaDebug.value = beta
    gammaDebug.value = gamma
  })
})
