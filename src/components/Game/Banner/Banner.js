const Banner = ({type, gusses}) => (
    type === 'won' ? 
    (<div class="happy banner">
        <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{gusses} guesses</strong>.
        </p>
        </div>
    ):
    (<div class="sad banner">
        <p>Sorry, the correct answer is <strong>LEARN</strong>.</p>
      </div>)
)

export default Banner;