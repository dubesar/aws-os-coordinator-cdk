# aws-os-coordinator-cdk
This is a sample showing how to use coordinator node with AWS Opensearch


```
HelloCdkStack: start: Building cc673b2fc5a866fdadde5f7d49ea5a1ab183d163d1e164b8fc1596fbde3db637:current_account-current_region
HelloCdkStack: success: Built cc673b2fc5a866fdadde5f7d49ea5a1ab183d163d1e164b8fc1596fbde3db637:current_account-current_region
HelloCdkStack: start: Publishing cc673b2fc5a866fdadde5f7d49ea5a1ab183d163d1e164b8fc1596fbde3db637:current_account-current_region
HelloCdkStack: success: Published cc673b2fc5a866fdadde5f7d49ea5a1ab183d163d1e164b8fc1596fbde3db637:current_account-current_region
HelloCdkStack: deploying... [1/1]
HelloCdkStack: creating CloudFormation changeset...
HelloCdkStack | 0/3 | 3:24:17 PM | UPDATE_IN_PROGRESS   | AWS::CloudFormation::Stack     | HelloCdkStack User Initiated
HelloCdkStack | 0/3 | 3:24:21 PM | UPDATE_IN_PROGRESS   | AWS::OpenSearchService::Domain | Domain (Domain66AC69E0) 
0/3 Currently in progress: HelloCdkStack, Domain66AC69E0
HelloCdkStack | 1/3 | 3:54:46 PM | UPDATE_COMPLETE      | AWS::OpenSearchService::Domain | Domain (Domain66AC69E0) 
HelloCdkStack | 2/3 | 3:54:47 PM | UPDATE_COMPLETE_CLEA | AWS::CloudFormation::Stack     | HelloCdkStack 
HelloCdkStack | 3/3 | 3:54:48 PM | UPDATE_COMPLETE      | AWS::CloudFormation::Stack     | HelloCdkStack 

 ✅  HelloCdkStack

✨  Deployment time: 1852.98s

Stack ARN:
arn:aws:cloudformation:us-east-1:585768165400:stack/HelloCdkStack/819432d0-d647-11ef-a38b-0ebfc552ac31

✨  Total time: 1856.4s
```


Domain status

```
aws opensearch describe-domain --domain-name domain66ac69e0-nuobbrzskfpy
{
    "DomainStatus": {
        "DomainId": "585768165400/domain66ac69e0-nuobbrzskfpy",
        "DomainName": "domain66ac69e0-nuobbrzskfpy",
        "ARN": "arn:aws:es:us-east-1:585768165400:domain/domain66ac69e0-nuobbrzskfpy",
        "Created": true,
        "Deleted": false,
        "Endpoint": "search-domain66ac69e0-nuobbrzskfpy-mdgol255lqqhnyqpije2267mkm.us-east-1.es.amazonaws.com",
        "Processing": false,
        "UpgradeProcessing": false,
        "EngineVersion": "OpenSearch_1.0",
        "ClusterConfig": {
            "InstanceType": "m5.large.search",
            "InstanceCount": 3,
            "DedicatedMasterEnabled": true,
            "ZoneAwarenessEnabled": true,
            "ZoneAwarenessConfig": {
                "AvailabilityZoneCount": 3
            },
            "DedicatedMasterType": "m5.large.search",
            "DedicatedMasterCount": 3,
            "WarmEnabled": false,
            "ColdStorageOptions": {
                "Enabled": false
            },
            "MultiAZWithStandbyEnabled": false,
            "NodeOptions": [
                {
                    "NodeType": "coordinator",
                    "NodeConfig": {
                        "Enabled": true,
                        "Type": "c5.large.search",
                        "Count": 3
                    }
                }
            ]
        },
        "EBSOptions": {
            "EBSEnabled": true,
            "VolumeType": "gp2",
            "VolumeSize": 100
        },
        "AccessPolicies": "",
        "IPAddressType": "ipv4",
        "SnapshotOptions": {
            "AutomatedSnapshotStartHour": 0
        },
        "CognitoOptions": {
            "Enabled": false
        },
        "EncryptionAtRestOptions": {
            "Enabled": false
        },
        "NodeToNodeEncryptionOptions": {
            "Enabled": false
        },
        "AdvancedOptions": {
            "override_main_response_version": "false",
            "rest.action.multi.allow_explicit_index": "true"
        },
        "ServiceSoftwareOptions": {
            "CurrentVersion": "OpenSearch_1_0_R20241003",
            "NewVersion": "",
            "UpdateAvailable": false,
            "Cancellable": false,
            "UpdateStatus": "COMPLETED",
            "Description": "There is no software update available for this domain.",
            "AutomatedUpdateDate": "1970-01-01T05:30:00+05:30",
            "OptionalDeployment": true
        },
        "DomainEndpointOptions": {
            "EnforceHTTPS": false,
            "TLSSecurityPolicy": "Policy-Min-TLS-1-0-2019-07",
            "CustomEndpointEnabled": false
        },
        "AdvancedSecurityOptions": {
            "Enabled": false,
            "InternalUserDatabaseEnabled": false,
            "AnonymousAuthEnabled": false
        },
        "IdentityCenterOptions": {},
        "AutoTuneOptions": {
            "State": "ENABLED",
            "UseOffPeakWindow": false
        },
        "ChangeProgressDetails": {
            "ChangeId": "a55512ef-382c-4d99-95a3-8b7cc2021bd5",
            "ConfigChangeStatus": "Completed",
            "InitiatedBy": "CUSTOMER",
            "StartTime": "2025-01-19T15:24:22.685000+05:30",
            "LastUpdatedTime": "2025-01-19T15:50:53.845000+05:30"
        },
        "OffPeakWindowOptions": {
            "Enabled": true,
            "OffPeakWindow": {
                "WindowStartTime": {
                    "Hours": 3,
                    "Minutes": 0
                }
            }
        },
        "SoftwareUpdateOptions": {
            "AutoSoftwareUpdateEnabled": false
        },
        "DomainProcessingStatus": "Active",
        "ModifyingProperties": [],
        "AIMLOptions": {
            "NaturalLanguageQueryGenerationOptions": {
                "DesiredState": "DISABLED",
                "CurrentState": "NOT_ENABLED"
            }
        }
    }
}

```