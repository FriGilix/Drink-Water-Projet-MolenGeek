let goal = 2000
        let currentVolume = 0

        let waterLevel = document.getElementById('waterLevel')
        let percentage = document.getElementById('percentage')
        let remaining = document.getElementById('remaining')
        let bottles = document.querySelectorAll('.bottle')

        bottles.forEach((bottle, index) => {
            bottle.addEventListener('click', () => {
                let volume = parseInt(bottle.getAttribute('data-volume'))
                if (bottle.classList.contains('active')) {
                    currentVolume -= volume
                    bottle.classList.remove('active')
                 
                    for (let i = index + 1; i < bottles.length; i++) {
                        if (bottles[i].classList.contains('active')) {
                            currentVolume -= parseInt(bottles[i].getAttribute('data-volume'))
                            bottles[i].classList.remove('active')
                        }
                    }
                } else if (currentVolume + volume <= goal) {
                    
                    for (let i = 0; i <= index; i++) {
                        if (!bottles[i].classList.contains('active')) {
                            currentVolume += parseInt(bottles[i].getAttribute('data-volume'))
                            bottles[i].classList.add('active')
                        }
                    }
                }
                updateWaterLevel()
            })
        })

        function updateWaterLevel() {
            let percent = (currentVolume / goal) * 100
            waterLevel.style.height = `${percent}%`
            percentage.textContent = `${Math.round(percent)}%`
            percentage.style.bottom = `${percent}`
            remaining.textContent = `${goal - currentVolume} Remained`
        }