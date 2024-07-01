import Link from 'next/link'

const Resource = ({ title, url }) => {
  const buttonStyle = {
    display: 'inline-block',
    padding: '1px 10px',
    marginRight: '4px',
    marginTop: '2px',
    borderRadius: '2.5px',
    color: '#FFFFFF',
    backgroundColor: '#076678',
    textDecoration: 'none',
    fontSize: '12px',
    textAlign: 'center',
    transition: 'background-color 0.3s',
    cursor: 'pointer',
  }

  const hoverStyle = {
    backgroundColor: '#005f87',
    cursor: 'default',
  }

  return (
    <Link
      href={url}
      target="_blank"
      style={buttonStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor
        e.currentTarget.style.cursor = hoverStyle.cursor
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor
        e.currentTarget.style.cursor = buttonStyle.cursor
      }}
    >
      {title}
    </Link>
  )
}

export default Resource
