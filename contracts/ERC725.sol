pragma solidity ^0.4.24;

interface ERC725 {
    event DataChanged(bytes32 indexed key, bytes32 indexed value);
    event ContractCreated(address indexed contractAddress);

    function getData(bytes32 _key) external view returns (bytes32 _value);
    function setData(bytes32 _key, bytes32 _value) external;
    function transfer(address _token, address to, uint256 value) external;
    // function execute(uint256 _operationType, address _to, uint256 _value, bytes calldata _data) external;
}