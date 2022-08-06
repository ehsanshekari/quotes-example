import Quote from "./Quote"

const QuoteList = (props) => {
    return <div>{props.quotes.map((quote, index) => <Quote key={index} text={quote.content} person={quote.author} />)}</div>
}

export default QuoteList;